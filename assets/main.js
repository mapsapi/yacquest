$(document).bind('mobileinit', function () {
    $.mobile.useFastClick = true;
//    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.buttonMarkup.hoverDelay = 0;
});

function setupMap () {
    var $container = $('#map');

    if (!$container.length) {
        return;
    }

    var map = new ymaps.Map($container[0], {
            center: [40, 0],
            zoom: 0,
//            type: null,
            maxZoom: 3,
            minZoom: 0
        }),
        evalFunc = function (e) {
            e.preventDefault();

            var input = $('#user-js')[0];

            input.blur();
            eval(input.value);

            return false;
        };

//    map.layers.add(new ymaps.Layer("../tiles/%z/%x/%y.png"));

    $(window).trigger('mapready', [map]);

    $('#eval-form').on('submit', evalFunc);
    $('#eval-btn').on('vclick', evalFunc);

    $('#footer').on('transitionend webkitTransitionEnd', function () {
        map.container.fitToViewport();
    });

    $('.footer-toggle').on('vclick', function (e) {
        e.preventDefault();
        $('#footer').toolbar('toggle');
    });
}

$(function () {
    ymaps.ready(function () {
        setupMap();

        $('#footer')
            .toolbar('option', 'hideDuringFocus', 'textarea')
            .toolbar('option', 'tapToggle', false);
    });

    $('#user-js').on('keyup', function () {
        var value = $(this).val();

        if (value.length == 1) {
            $(this).val(value.toLowerCase());
        }
    });
});