(function () {
  'use strict';

  /* @ngdoc object
   * @name myAngularUi
   * @description
   *
   */
  angular
    .module('myAngularUi', [
      'ngAria',
      'ui.router',
      'ui.bootstrap',
      'home',
      'formValidation',
      'directiveWithScope'
      ]);
}());
