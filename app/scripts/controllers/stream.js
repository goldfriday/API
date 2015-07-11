'use strict';

/**
 * @ngdoc function
 * @name yookoreApp.controller:StreamCtrl
 * @description
 * # StreamCtrl
 * Controller of the yookoreApp
 */
angular.module('yookoreApp')
  .controller('StreamCtrl', function ($scope) {
    $scope.stream = [
      'how are you',
      '`i am working in victory',
      'Karma'
    ];
  });
