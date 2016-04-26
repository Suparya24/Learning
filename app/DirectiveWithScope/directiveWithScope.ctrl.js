(function() {
    'use strict';

    angular
        .module('directiveWithScope')
        .controller('directiveWithScopeCtrl', directiveWithScopeCtrl);



    /* @ngInject */
    function directiveWithScopeCtrl() {
        var vm = this;
        vm.title = 'Directive With Scope';
        vm.getIncrimentValue = getIncrimentValue;
        vm.getDecrimentValue = getDecrimentValue;
        vm.finalValue = 0;
        vm.header=[{headerName:'name'},{headerName:'contactNo'}];


        activate();

        ////////////////

        function activate() {}

        function getIncrimentValue() {
            // console.log('hi');
           vm.finalValue += 1;
            console.log(vm.finalValue);

        }

        function getDecrimentValue() {
            vm.finalValue -= 1;
        }
    }
})();
