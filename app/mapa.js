var mydata = [{
    "_id": "TRK45679101121",
    "timestamp": "2015-02-03T09:18:02.989Z",
    "status": 1,
    "path": [{
        "timestamp": 51422955082989,
        "speed": 30,
        "direction": 45.510029,
        "longitude": 31.510029,
        "latitude": 8.675009
    }]
}, {
    "_id": "TRK456799",
    "timestamp": "2015-02-03T09:18:02.989Z",
    "status": 1,
    "path": [{
        "timestamp": 51422955082989,
        "speed": 30,
        "direction": 45.510029,
        "longitude": 32.510029,
        "latitude": 12.675009
    }]
}];

//Angular App Module and Controller
angular.module('mapsApp', [])
    .controller('MapCtrl', function($scope,$http) {

        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(31, 8),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function(lat, lng) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(lat, lng),
                title: "lat: " + lat + ",lng: " + lng
            });

            $scope.markers.push(marker);

        }

        $http({method: 'GET', url: "http://maps.google.com/maps/api/geocode/json?address=Canada&sensor=true&region=USA"}).
        success(function(data, status) {
            $scope.status = status;
            $scope.JSONdata = data;
            console.log(JSON.stringify(data));
        }).
        error(function(data, status) {
            $scope.JSONdata = data || "Request failed";
            $scope.status = status;
            console.log($scope.data+$scope.status);
        });


        for (i = 0; i < mydata.length; i++) {
            console.log(mydata[i]["path"][0]["longitude"], mydata[i]["path"][0]["latitude"]);
            createMarker(mydata[i]["path"][0]["longitude"],mydata[i]["path"][0]["latitude"]);
        }

    });