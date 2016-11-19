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

    $scope.$watch('cart', function(newValue, oldValue){
       console.log(newValue);
    });

    $scope.obchody = [false, false, false,false];

    $scope.$watch('obchody', function(newValue, oldValue){
        console.log(newValue);
    });
    

    $scope.$watchGroup(['keywords', 'filter'], function(newValues, oldValues) {
        $http.get("https://bestprice-backend.herokuapp.com/products?search="+ newValues[0]+";category="+newValues[1]).success(function(response){
            $scope.data=response;
            console.log(newValues);
             });
    });
    
      
    $scope.cart = [];
    $scope.counter = [];
    
    
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

        for(var i = 0; i< $scope.cart.length; i++){
           if($scope.cart[i].name == product.name){
            if ($scope.counter[i]>1) {
                $scope.counter[i]-=1;                     
            }
            else{
             $scope.cart.splice($scope.cart.indexOf(i), 1);

            }
          }
      }

        

    }
    

}]);

    function openNav() {
        document.getElementById("mySidenav").style.width = "750px";
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