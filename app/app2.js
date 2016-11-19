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

    $scope.obchody = [false, false, false,false];

    $scope.$watchCollection('obchody', function(newValue, oldValue){
        console.log(newValue);
    });

    $scope.$watch('keywords', function (newValue, oldValue){
        $http.get("https://bestprice-backend.herokuapp.com/products?search="+ newValue).success(function(response){
            $scope.data=response;
        });
    });
    
      
    $scope.cart = [];
    $scope.counter = [];
    /*$scope.addProduct = function(product){
        $scope.cart.push(product);
    }*/
    
    $scope.addProduct = function(product, quantity){
          
            if ($scope.cart.length > 0){
                var repeat = false;
                for(var i = 0; i< $scope.cart.length; i++){
                    if($scope.cart[i].name == product.name){
                        repeat = true;
                        if (!quantity) {
                            $scope.counter[i]+=1;

                        } else{
                            $scope.counter[i]+=quantity;

                    }                        
                    }
                }
                if (!repeat) {
                    product.count = 1;
                    $scope.cart.push(product); 
                    if (!quantity) {
                        $scope.counter.push(1);

                    } else{
                        $scope.counter.push(quantity);

                    }

                }

            } else {
                    $scope.cart.push(product); 
                    if (!quantity) {
                        $scope.counter.push(1);

                    } else{
                        $scope.counter.push(quantity);

                    }

                }
         };

    $scope.deleteProduct = function(product){
        
    }
    

}]);

    function openNav() {
        document.getElementById("mySidenav").style.width = "400px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


    function openNav2() {
        document.getElementById("mySidenav2").style.width = "400px";
    }

    function closeNav2() {
        document.getElementById("mySidenav2").style.width = "0";
    }