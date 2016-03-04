(function () {
  'use strict';

  angular
    .module('formValidation',['ui.router'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('validateForm', {
        url: '/validateForm',
        templateUrl: 'formValidation/form-validation.tpl.html',
        // ,
        controller: 'FormValidationCtrl',
        controllerAs :'vm'
        // controllerAs: 'home'
      });
  }
}());