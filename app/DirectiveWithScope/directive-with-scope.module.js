(function() {
    'use strict';

    angular
        .module('directiveWithScope', ['ui.router'])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('directiveScope', {
                url: '/directiveScope',
                templateUrl: 'DirectiveWithScope/directiveWithScope.tpl.html',
                controller: 'directiveWithScopeCtrl',
                controllerAs: 'vm'
            });
    }
})();
