(function() {
    'use strict';

    angular
        .module('home')
        .controller('MyDirectiveCtrl', MyDirectiveCtrl);

    /* @ngInject */
    function MyDirectiveCtrl() {
        var vm = this;
        vm.title = 'MyDirectiveCtrl';
        vm.myInputValue = 0;
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

        vm.getIncreasedValue = getIncreasedValue;
        vm.getDecreasedValue = getDecreasedValue;
        vm.finalValue = 0;

        activate();

        ////////////////

        function activate() {}


        function getIncreasedValue() {
            vm.finalValue += 2;
            vm.myInputValue += 1;
            console.log(vm.finalValue);
        }

        function getDecreasedValue() {
             vm.finalValue -= 1;
             vm.myInputValue -= 2;

        }
    }
})();
