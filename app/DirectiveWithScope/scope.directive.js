(function() {
    'use strict';

    angular
        .module('directiveWithScope')
        .directive('myDirectiveWithScope', myDirectiveWithScope);

;

    /* @ngInject */
    function myDirectiveWithScope() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
           
            link: link,
            restrict: 'E',
            templateUrl:'DirectiveWithScope/myDirectiveWithScope.tpl.html',
            scope: {
               myValue:'=',
               getIncreasedValue:'&',
               getDecreasedValue:'&'
            }
        };
        return directive;

        function link() {
        }
    }

    /* @ngInject */
    function Controller() {

    }
})();