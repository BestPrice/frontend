/**
 * Created by Alexandra on 12.11.2016.
 */
var app=angular.module('App',[]);

app.controller('filterKat',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){$scope.states=response;});
    $scope.update = function() {
        console.log($scope.item.code, $scope.item.name)
    }

}]);

app.controller('obchody',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/chainstores").success(function(response){$scope.states2=response;});

}]);
