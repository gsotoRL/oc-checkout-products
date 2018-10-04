var App = angular.module('checkoutApp', [])
.controller('checkoutCtrl', function($scope, $http) {
    $scope.path = staticPath; 
    $scope.selected = 'trial';



    $scope.selectOption = function(option){
        $scope.selected = option;
    };


});
