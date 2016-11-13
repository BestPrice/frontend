/**
 * Created by Alexandra on 12.11.2016.
 */
var app=angular.module('App',[]);

app.controller('statecontroler',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){$scope.states=response;});
}]);

