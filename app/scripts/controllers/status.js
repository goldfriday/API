'use strict';

angular.module('yookoreApp')
  .controller('StatusCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'status').success(function(status) {
     $scope.status = status;
    }).error(function(err){
    	alert('warning',"Unable to get status", err.message);

    })

  });
