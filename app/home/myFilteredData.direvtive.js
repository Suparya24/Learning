(function() {
    'use strict';

    angular
        .module('home')
        .directive('myFilteredData', myFilteredData);


    /* @ngInject */
    function myFilteredData() {
        // Usage:
        //
        // Creates:
        //
        var directive = {

            link: link,
            restrict: 'E',
            templateUrl: 'home/myFilteredData.tpl.html'
        };
        return directive;

        function link() {}
    }

    /* @ngInject */
  
})();
