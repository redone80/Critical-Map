define(['knockout', 'text!./map.html', 'core', 'jquery'], function (ko, templateMarkup, se, $) {
    function Map(params) {
        se.sandbox.subscribe('map:created', function(){
            $('.map-canvas').each(function(){
                $(this).height($(window).height());
            })
        });
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Map.prototype.dispose = function () {
    };

    return { viewModel: Map, template: templateMarkup };

});
