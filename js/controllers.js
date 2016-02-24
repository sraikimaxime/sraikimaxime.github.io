angular.module('myApp.controllers', []).
controller('myAppController', function($scope) {
    $scope.initialList = [1, 2, 3, 4];
    $scope.lodashList = _.chunk($scope.initialList, 2);
});
