define(['knockout', 'text!./marker-creator.html'], function (ko, templateMarkup) {
    var Map = null;

    // Subscribe event before component start
    se.sandbox.subscribe("map:created", function (map) {
        alert(1);
        Map = map;
    });

    function Markercreator(params) {
        this.message = ko.observable('Hello from the markerCreator component!');
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    Markercreator.prototype.dispose = function () {
    };

    return { viewModel: Markercreator, template: templateMarkup };

});
