var markersArray = [
    {
        id: 1,
        title: 'П1”',
        city: 'Москва',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.7727359,
        lng: 37.5864169,
        zIndex: 1
    },
    {
        id: 2,
        title: 'П2”',
        city: 'Москва',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.7227359,
        lng: 37.5964169,
        zIndex: 2
    },
    {
        id: 3,
        title: 'П3”',
        city: 'Москва',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.7627359,
        lng: 37.6264169,
        zIndex: 3
    },
    {
        id: 4,
        title: 'П4”',
        city: 'Москва',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.7227359,
        lng: 37.6864169,
        zIndex: 4
    },
    {
        id: 5,
        title: 'П5”',
        city: 'Москва',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.7527359,
        lng: 37.5464169,
        zIndex: 5
    },
    {
        id: 6,
        title: 'П1”',
        city: 'Санкт-Петербург',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 59.8746888,
        lng: 30.3680456,
        zIndex: 6
    },
    {
        id: 7,
        title: 'П2”',
        city: 'Санкт-Петербург',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 59.8978258,
        lng: 30.3683126,
        zIndex: 7
    },
    {
        id: 8,
        title: 'П1”',
        city: 'Казань',
        location: 'ул. Красноармейская, 45',
        phone: '+375 (22) 652-58-11',
        email: 'emailname@gmail.com',
        lat: 55.8592932,
        lng: 49.088737,
        zIndex: 8
    }
];
var markers = [];
var map;
var iconGray;
var iconRed;


$(document).ready(function () {
    var getCityName = $('#cityMapChoice').find('option:selected').val();
    getmarkersArray(getCityName);

    $('#cityMapChoice').on('change', function () {
        var getCityName = $(this).find('option:selected').val(),
            mapPosition = ($(this).find('option:selected').data('map-position')).split(',');

        setPosition(parseFloat(mapPosition[0]), parseFloat(mapPosition[1]));
        getmarkersArray(getCityName);
    });
    clickMarkerList();
});

window.onload = function () {
    initMap();
};

function getmarkersArray(cityName) {
    $('.city-markers').find('.city-marker').remove();
    var cityCount = 0,
        jScrollApi = $('.scroll-pane').data('jsp');
    for (var i = 0; i < markersArray.length; i++) {
        var data = markersArray[i];

        if(cityName === data.city) {
            $('.city-markers .jspPane').append('<div class="city-marker" data-marker-id="'+ data.id +'" data-lat="'+ data.lat +'" data-lng="'+ data.lng +'" style="display: none;"><span class="city-marker-address">'+ data.location +'</span><span class="city-marker-phone">'+ data.phone +'</span><span class="city-marker-email">'+ data.email +'</span></div>');
            cityCount++;
        }
    }
    if(cityCount === 0) {
        $('.city-markers').append('<div class="city-marker error" style="display: none;">В этом городе нет участников</div>');
    }

    $('.city-markers').find('.city-marker').fadeIn();
    clickMarkerList();
    jScrollApi.reinitialise();
}

function initMap() {
    var myLatlng = new google.maps.LatLng(55.7545941,37.5818564);
    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        mapTypeControl: false
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var iconGray = {
        url: 'img/flag-gray.png',
        size: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(60, 60)
    };
    var iconRed = {
        url: 'img/flag.png',
        size: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(60, 60)
    };
    for (var i = 0; i < markersArray.length; i++) {
        var data = markersArray[i];
        var marker = new google.maps.Marker({
            position: {lat: data.lat, lng: data.lng},
            map: map,
            icon: iconGray,
            title: data.title,
            zIndex: data.zIndex
        });
        markers.push(marker);
        (function (marker, data) {
            google.maps.event.addListener(marker, 'click', function () {
                $('.city-marker').removeClass('active');
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon(iconGray);
                }
                marker.setIcon(iconRed);
                $('.city-marker').each(function () {
                    var markerListId = $(this).data('marker-id');

                    if(markerListId === data.id) {
                        $(this).addClass('active');
                    }
                });
            });
        })(marker, data);
    }
}

function setPosition(lat, lng) {
    map.setCenter({
        lat: lat,
        lng: lng
    });
}

function clickMarkerList() {
    $('.city-marker').on('click', function () {
        var lat = $(this).data('lat'),
            lng = $(this).data('lng');
        var iconGray = {
            url: 'img/flag-gray.png',
            size: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(60, 60)
        };
        var iconRed = {
            url: 'img/flag.png',
            size: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(60, 60)
        };

        $('.city-marker').removeClass('active');

        for (var j = 0; j < markers.length; j++) {
            if(lat.toFixed(6) === markers[j].getPosition().lat().toFixed(6) && lng.toFixed(6) === markers[j].getPosition().lng().toFixed(6)) {
                markers[j].setIcon(iconRed);
            } else {
                markers[j].setIcon(iconGray);
            }
        }
        $(this).addClass('active');
    });
}