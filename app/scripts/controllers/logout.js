'use strict';

angular.module('yookoreApp')
  .controller('LogoutCtrl', function (authToken ,$state) {
  authToken.removeToken();
  $state.go('main');
  });
