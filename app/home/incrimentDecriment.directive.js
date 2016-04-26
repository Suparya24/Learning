(function() {
    'use strict';

    angular
        .module('home')
        .directive('myIncrimentValue', myIncrimentValue);



    /* @ngInject */
    function myIncrimentValue() {
        // Usage:
        //
        // Creates:
        //
        var directive = {

            link: link,
            restrict: 'E',
            templateUrl: 'home/incrimentDecriment.tpl.html',

        };

        return directive;

        function link() {}
    }

    /* @ngInject */
    function Controller() {

    }
})();
