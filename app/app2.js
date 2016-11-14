/**
 * Created by Alexandra on 12.11.2016.
 */
var app=angular.module('App',[]);

app.controller('filterKat',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
            $scope.states=response;
    });

    $http.get("https://bestprice-backend.herokuapp.com/chainstores").success(function(response){
        $scope.states2=response;
    });

    /*$scope.$watch('filter', function(newValue, oldValue){
       console.log(newValue);
    });

    $scope.$watchGroup(['filter','obchody'], function(newValue, oldValue){
        console.log(newValue);
    });*/

    $scope.obchody = [true, true, true,true];

    $scope.$watchCollection('obchody', function(newValue, oldValue){
        console.log(newValue);
    });

    $scope.$watch('keywords', function (newValue, oldValue){
        $http.get("https://bestprice-backend.herokuapp.com/products?search="+ newValue).success(function(response){
            $scope.data=response;
        });
    });

}]);

