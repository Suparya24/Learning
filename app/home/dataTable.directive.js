(function() {
    'use strict';

    angular
        .module('home')
        .directive('myTable', myTable);

    /* @ngInject */
    function myTable() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'home/dataTable.tpl.html',
            scope: {
                data:'=',
                myColcollection:'='
            }
        };
        return directive;

        function link() {}
    }


})();
