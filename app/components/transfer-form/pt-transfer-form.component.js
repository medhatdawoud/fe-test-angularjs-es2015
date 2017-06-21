'use strict';

(function () {
    angular
        .module('peachtreeBank')
        .component('ptTransferForm', {
            templateUrl: "app/components/transfer-form/pt-transfer-form.view.html",
            bindings: {},
            controllerAs: "model",
            controller: ['TransactionsService', function (TransactionsService) {
                var model = this;

                model.fullBalance = 5824.76;

                var raw = {
                    amount: null,
                    categoryCode: "#12a580",
                    merchant: null,
                    merchantLogo: "assets/images/icon1.jpg",
                    transactionDate: new Date(),
                    transactionType: "Card Payment"
                };

                model.trans = angular.copy(raw);

                model.add = function () {
                    TransactionsService.addTransaction(model.trans);
                    model.fullBalance -= model.trans.amount;
                    model.trans = angular.copy(raw);
                }
            }]
        });
})();