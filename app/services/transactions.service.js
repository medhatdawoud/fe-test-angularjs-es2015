'use strict';

(function () {
    angular
        .module('peachtreeBank')
        .service('TransactionsService', TransactionsService);

    TransactionsService.$inject = ['$http'];

    function TransactionsService($http) {
        var service = {};

        service.transactions = [];

        service.addTransaction = function (transaction) {
            service.transactions.push(transaction);
        }

        service.getTransactions = function () {
            return $http.get('transactions.json')
                .then(function (response) {
                    return service.transactions = response.data.data;
                });
        }

        return service;
    }
})();