angular.module('myApp.controllers', []).
controller('myAppController', function($scope) {
    $scope.initialList = [1, 2, 3, 4];
    $scope.lodashList = _.chunk($scope.initialList, 2);
    $scope.anoherLodashList = _.sortBy([
      { 'name': 'fred', 'age': 48 },
      { 'name': 'barney', 'age': 36 },
      { 'name': 'cleme', 'age': 42 },
      { 'name': 'max', 'age': 34 }
    ], ['name', 'age']);
});
