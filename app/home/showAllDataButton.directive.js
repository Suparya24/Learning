(function() {
    'use strict';

    angular
        .module('home')
        .directive('myButton', myButton);



    /* @ngInject */
    function myButton() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl:'home/showAllDataButton.tpl.html'
        };
        return directive;

        function link() {}
    }

    /* @ngInject */
  
})();
