angular.module('myApp.controllers', []).
controller('myAppController', function($scope) {
    var users = [
      { 'user': 'fred', 'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'cleme', 'age': 42 },
      { 'user': 'max', 'age': 34 }
    ];
    $scope.initialList = [1, 2, 3, 4];
    $scope.lodashList = _.chunk($scope.initialList, 2);
    $scope.anoherLodashList = _.sortBy(users, function(o) { return o.age; });
});
