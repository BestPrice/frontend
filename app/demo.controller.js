/**
 * Created by Shripad on 2015-Nov-17.
 */
 
angular.module('AppTree',['tree.dropdown']).controller('treeDropdownCtrl',['$scope','$http', function ($scope,$http) 

{
    var ctrl = this;
    
    //$scope.states.push('blablabl');
    
    $http.get("https://bestprice-backend.herokuapp.com/categories").success(function(response){
            ctrl.treeData = response;
    
    // Set default selected...
    ctrl.selected = ctrl.treeData[0];
    
    });
    
    
    
}]);