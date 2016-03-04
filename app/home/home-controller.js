(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name home.controller:HomeCtrl
     *
     * @description
     *
     */
    angular
        .module('home')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {
        var vm = this;
        vm.ctrlName = 'HomeCtrl';
        vm.tableData = [{
            id: 1,
            name: 'suparya',
            mailid: 'suparya.das@gmail.com'
        }, {
            id: 2,
            name: 'sonalika',
            mailid: 'sonalika.das@gmail.com'
        }, {
            id: 3,
            name: 'yamini',
            mailid: 'yamini.konduru@gmail.com'
        }, {
            id: 4,
            name: 'jagriti',
            mailid: 'jagriti.konduru@gmail.com'
        }];

        vm.columnCollection = [{
            id: 'id',
            title: 'Id',
            isAction: false
        }, {
            id: 'name',
            title: 'Name',
            isAction: false
        }, {
            id: 'mailid',
            title: 'EmailId',
            isAction: false
        }];

    }
}());
