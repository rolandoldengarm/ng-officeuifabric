'use strict';

var demoApp = angular.module('demoApp', [
  'officeuifabric.core',
  'officeuifabric.components.dropdown'
]);

demoApp.controller('dropdownCtrl', ['$scope', function($scope) {
    $scope.dropdownValue = 'value2';
}]);