(function() {
    'use strict';

    angular
        .module('formValidation')
        .controller('FormValidationCtrl', FormValidationCtrl);

    /* @ngInject */
    function FormValidationCtrl() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        	
        }
    }
})();