angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('weatherCtrl', function($scope, $http) {
    var currentCity = new BMap.LocalCity();
    currentCity.get(function(result) {
        $scope.currentCity = result.name;
        $http.get('https://soyaapi.herokuapp.com/api/weather?location=' + $scope.currentCity + '&current_only=1').success(function(data) {
            $scope.weatherData = data;
        });
    });

})

.controller('mapCtrl', function($scope, $http, $timeout) {

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            var topLeftControl = new BMap.NavigationControl({
                anchor: BMAP_ANCHOR_TOP_LEFT
            });
            var map = new BMap.Map('fuckmap');
            map.addOverlay(mk);
            map.centerAndZoom(r.point, 15);
            map.addControl(topLeftControl);
        } else {
            alert('获取位置失败');
        }
    }, {
        enableHighAccuracy: true
    })


})

.controller('filmCtrl', function($scope, $http) {
    var currentCity = new BMap.LocalCity();
    currentCity.get(function(result) {
        $scope.currentCity = result.name;
        $http.get('https://soyaapi.herokuapp.com/api/movie/hot?location=' + $scope.currentCity).success(function(data) {
            $scope.filmData = data.data;
            console.log(data);
        });
    });

})

.controller('filmItemCtrl', function($scope, $stateParams) {


});