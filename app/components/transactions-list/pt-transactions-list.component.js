'use strict';

(function () {
    angular
        .module('peachtreeBank')
        .component('ptTransactionsList', {
            templateUrl: "app/components/transactions-list/pt-transactions-list.view.html",
            bindings: {
                transactions: "=",
            },
            controllerAs: "model",
            controller: function () {
                var model = this;

                model.sorting = 'transactionDate';
                model.sortingOrder = 'desc';
            }
        });
})();