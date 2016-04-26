(function() {
    'use strict';

    angular
        .module('directiveWithScope')
        .directive('autoFocus', autoFocus);


    /* @ngInject */
    function autoFocus() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',

        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    /* @ngInject */
    function Controller() {
        element[0].focus();
    }
})();
