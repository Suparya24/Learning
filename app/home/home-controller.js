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
        vm.getAllData = getAllData;
        vm.getDataByHeader = getDataByHeader;
        vm.heraderData = [];

        activate();

        function activate() {
           // getAllData(); 
        }

        function getAllData() {
            vm.newData = vm.tableData;
        }

        function getDataByHeader() {
            vm.filterDataArr = [];
            angular.forEach(vm.tableData, function(obj) {
                if (obj.hasOwnProperty(vm.newDatabyId)) {
                    vm.filterDataArr.push(obj[vm.newDatabyId]);
                }
            });
            if (vm.filterDataArr.length === 0) {
                alert('Please select different Id');
            }
            // console.log(vm.newDatabyId);
            // angular.forEach(vm.tableData, function(item) {
            //     for (var key in item) {
            //         if (key === vm.newDatabyId) {
            //             vm.headerData.push(item.key);
            //             // return vm.headerData;
            //             console.log(vm.headerData);
            //         }
            //     }
            // });
            // // vm.headerData = _.map(vm.tableData, vm.newDatabyId);
            // //  console.log(vm.headerData);

        }
    }
}());
