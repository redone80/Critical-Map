(function (root, factory) {
    'use strict';
    // CommonJS
    if (typeof exports === 'object' && module) {
        module.exports = factory(require('smartexts'), require('knockout'));
        // AMD
    } else if (typeof define === 'function' && define.amd) {
        define(['smartexts', 'knockout'], factory);
        // Browser
    } else {
        factory();
    }
}((typeof window === 'object' && window) || this, function (SE, ko) {
    SE.extension('map-geolocation', function () {
        var Map;
        var self = this;

        self.userLocation = ko.observable(null);

        function handleNoGeolocation(errorFlag) {
            if (errorFlag) {
                var content = 'Error: The Geolocation service failed.';
            } else {
                var content = 'Error: Your browser doesn\'t support geolocation.';
            }

            alert(content);
        }

        // Map response
        self.sandbox.subscribe("map:created", function (map) {
            Map = map;

        }, this);


        self.sandbox.subscribe("map:geolocation:get", function (func) {
            if(self.userLocation()) func(self.userLocation());


            // Try HTML5 geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    self.userLocation(pos);
                    func(pos);
                }, function () {
                    handleNoGeolocation(true);
                });
            } else {
                // Browser doesn't support Geolocation
                handleNoGeolocation(false);
            }

        }, this);

    });

}));