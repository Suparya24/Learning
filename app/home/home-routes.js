(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      }).state('myDirective', {
        url: '/myDirective',
        templateUrl: 'home/myDirective.tpl.html',
        controller: 'MyDirectiveCtrl',
        controllerAs: 'vm'
      });
  }
}());
