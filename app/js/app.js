        var app=angular.module('droplist',[]);
        app.controller('statecontroler',['$scope','$http', function ($scope,$http) {
            $http.get("https://jsonplaceholder.typicode.com/users").success(function(response){$scope.states=response;});
            }]);

