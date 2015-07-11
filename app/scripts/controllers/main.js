'use strict';

/**
 * @ngdoc function
 * @name yookoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yookoreApp
 */
angular.module('yookoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
