/**
 * Created by Alexandra on 12.11.2016.
 */
var app=angular.module('App',['AppTree']);

app.controller('filterKat',['$scope','$http', function ($scope,$http) {
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
            $scope.states=response;
    });
    var states1 = $scope.states1;
    
    function buildList(data, isSub){
        var html = (isSub)?'<div>':''; // Wrap with div if true
        html += '<ul>';
        for(item in data){
            html += '<li>';
            if(typeof(data[item].sub) === 'object'){ // An array will return 'object'
                if(isSub){
                    html += '<a href="' + data[item].link + '">' + data[item].name + '</a>';
                } else {
                    html += data[item].id; // Submenu found, but top level list item.
                }
                html += buildList(data[item].sub, true); // Submenu found. Calling recursively same method (and wrapping it in a div)
            } else {
                html += data[item].id // No submenu
            }
            html += '</li>';
        }
        html += '</ul>';
        html += (isSub)?'</div>':'';
        return html;
    }
    
    function myFunction() {
    var x = buildList(states1, false);
    document.getElementById("demo").innerHTML = x;
}

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
    
    $scope.cart = [];
    
    $scope.addProduct = function(product){
        $scope.cart.push(product);
    }
    
    $scope.deleteProduct = function(product){
        
    }
    

}]);


//************************************



//***********************************

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

function processNodes(node) {
    var return_str = '';
    switch (jQuery.type(node)) {
    case 'string':
        if ($('#hierarchy_chk').is(':checked')) {
            return_str += '' + node + '';
        } else {
            return_str += '' + node + '';
        }
        break;
    case 'array':
        $.each(node, function (item, value) {
            return_str += JSONTREEVIEWER.processNodes(this);
        });
        break;
    default:
        /*object*/
        $.each(node, function (item, value) {
            if ($('#hierarchy_chk').is(':checked')) {
                return_str += '' + item + '';
                return_str += JSONTREEVIEWER.processNodes(this);
                return_str += '';
            } else {
                return_str += JSONTREEVIEWER.processNodes(this);
            }
        });
    } /*Clean up any undefined elements*/
    return_str = return_str.replace('undefined', '');
    return return_str;
}

var data = [
    {
        name: 'node1',
        children: [
            { name: 'child1' },
            { name: 'child2' }
        ]
    },
    {
        name: 'node2',
        children: [
            { name: 'child3' }
        ]
    }
];

$(function() {
    $('#tree1').tree({
        data: data
    });
});