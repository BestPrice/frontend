/**
 * Created by Alexandra on 12.11.2016.
 */
var app=angular.module('App',['tree.dropdown']);

app.controller('filterKat',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
        $scope.states=response;
        
    });
    
    $http.get("https://bestprice-backend.herokuapp.com/chainstores").success(function(response){
        $scope.states2=response;
    });

    $http.get("https://bestprice-backend.herokuapp.com/stores").success(function(response){
        $scope.stores=response;
    });


    $scope.$watch('cart', function(newValue, oldValue){
       console.log(newValue);
    });

	$scope.skuska={"stores":[{"chain_store_name":"Lidl","products":[{"id_product":"476ce886-ef33-4f06-a34b-1f01b5330292","product_name":"Biely Jogurt","brand_name":"Rajo","count":0,"price":"0"}]},{"chain_store_name":"Tesco","products":[{"id_product":"cedac768-da7e-4467-8876-a0b26adc5e4b","product_name":"Mňam dva duo - Vanilka","brand_name":"Rajo","count":1,"price":"0.32"},{"id_product":"01256ec5-8af0-4a7c-a367-8acc01c1184b","product_name":"Mňam dva duo - Čokoláda","brand_name":"Rajo","count":1,"price":"0.43"}]}],"shop_price_total":"0.75"}
    $scope.obchody = [true, true, true,true];
	$scope.vypocetCeny;
	$scope.showResults = false;


    $scope.$watch('obchody', function(newValue, oldValue){
        console.log(newValue);
    });
    

    $scope.$watchGroup(['keywords', 'ctrl.selected.id_category'], function(newValues, oldValues) {
        $scope.data=null;
        if(newValues[1]=="1111"){
            newValues[1] = "";
        }
        if(newValues[0]==null){
            newValues[0] = "";
        }
        $http.get("https://bestprice-backend.herokuapp.com/products?search="+ newValues[0]+";category="+newValues[1]).success(function(response){
            $scope.novahodnota = newValues;
            $scope.data=response;
            console.log(newValues);
             });
    });
    
    //********* start of  DropDown controller
    
    var ctrl = this;
    
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
        
        var text = '[{ "id_category": "1111", "name":"všetky produkty...", "subcategories":[]}]';
        
        var obj = JSON.parse(text);
        
        obj[0].subcategories = response;
        
        ctrl.treeData = obj;
    
        // Set default selected...
        ctrl.selected = ctrl.treeData[0];
         
    
    });
    
    //********* end of  DropDown controller
      
    $scope.cart = [];
    $scope.counter = [];
    $scope.pocetObchodov = 1;
    
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
					product.count = 1;
                    $scope.cart.push(product); 
                    if (quantity == null) {
						quantity = 1;
                    } 
                    $scope.counter.push(quantity);
                }
         };

    $scope.deleteProduct = function(product){

        for(var i = 0; i< $scope.cart.length; i++){
           if($scope.cart[i].name == product.name){
            if ($scope.counter[i]>1) {
                $scope.counter[i]-=1;                     
            }
            else{
            $scope.counter.splice($scope.cart.indexOf(i), 1);
            $scope.cart.splice($scope.cart.indexOf(i), 1);
            }
          }
      }

        

    }
	$scope.prepni = function(){
		$scope.showResults=false;
		
	}
	
	$scope.calculatePrice = function(cart){
	
		
		$scope.param = [];

		//test input
		var x="{\"products\": [{\"id_product\": \"fa859c15-b89c-4b72-aace-8f09924cce39\",\"count\": 1},{\"id_product\": \"ef9929ce-40d4-47d4-b1a7-cde616df2a0c\",\"count\": 2},{\"id_product\": \"3b59192c-21a4-4e43-985c-33592b5fe4e4\",\"count\": 3}],\"user_preference\": {\"id_chain_stores\": [ \"6e38b271-321f-4df1-b8f7-87090b532f68\"],\"max_stores\": 1}}";
		
		var poleProduktov = [];
		
		for(var i = 0; i< $scope.cart.length; i++){
			var jedenProdukt = {};
			jedenProdukt["id_product"] = $scope.cart[i].id_product;
			jedenProdukt["count"] = $scope.counter[i];
			poleProduktov.push(jedenProdukt);
		}
		var poleObchodov = [];
		if($scope.obchody[0]) poleObchodov.push("6e38b271-321f-4df1-b8f7-87090b532f68"); //Billa
		if($scope.obchody[1]) poleObchodov.push("6259218a-cf1f-4d7e-b787-50db28de07f6"); //Lidl
		if($scope.obchody[2]) poleObchodov.push("454025b0-2518-4376-8c96-380b0f7d78a0"); //Tesco
		if($scope.obchody[3]) poleObchodov.push("8bc9a761-5a8a-437b-9663-e7b33db7aa33"); //Coop Jednota
	
		var parameter = {};
		var user_preference = {};
		user_preference["id_chain_stores"] = poleObchodov;
		//defaultne nastavenie poctu obchodov na 1, ak si uzivatel nic nevybral. Nenasiel som na to funkciu tak to robim tu.
		if($scope.pocetObchodov == null){
			$scope.pocetObchodov=1;
		}
		user_preference["max_stores"] = $scope.pocetObchodov;
		parameter["products"] = poleProduktov;
		parameter["user_preference"] = user_preference;
		
		$http.post("https://bestprice-backend.herokuapp.com/shop",parameter).success(function(response){
			$scope.vypocetCeny=response;
			//window.location.href='bestprice.html';
			console.log("vstup je  = " + JSON.stringify(parameter));
			//console.log("produky su" + JSON.stringify($scope.cart));
			console.log("vystup je" + JSON.stringify($scope.vypocetCeny));
			//console.log("produky sa " + JSON.stringify(poleProduktov));
			//window.alert(response);

			$scope.showResults = true;
    });  
	//window.alert("not success");
		  
	}
    

}]);



//***********************************

    function openNav() {
        document.getElementById("mySidenav").style.width = "750px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    function openNav2() {
        document.getElementById("mySidenav2").style.width = "350px";
    }

    function closeNav2() {
        document.getElementById("mySidenav2").style.width = "0";
    }
