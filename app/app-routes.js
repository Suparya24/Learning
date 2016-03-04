(function () {
  'use strict';

  angular
    .module('myAngularUi')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
