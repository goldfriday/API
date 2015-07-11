'use strict';

/**
 * @ngdoc directive
 * @name yookoreApp.directive:validateEquals
 * @description
 * # validateEquals
 */
angular.module('yookoreApp')
  .directive('validateEquals', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the validateEquals directive');
      }
    };
  });
