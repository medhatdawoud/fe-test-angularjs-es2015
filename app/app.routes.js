'use strict';

(function () {
    angular.module('peachtreeBank').config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('transactions', {
                    url: '/',
                    templateUrl: 'app/pages/transactions.view.html',
                    controller: 'TransactionsCtrl',
                    controllerAs: 'vm'
                })
        }]);
})();