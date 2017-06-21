'use strict';

(function () {
    angular
        .module('peachtreeBank')
        .controller('TransactionsCtrl', TransactionsController);

    TransactionsController.$inject = ['$state', 'TransactionsService'];

    function TransactionsController($state, TransactionsService) {
        var vm = this;

        vm.transactions = [];

        TransactionsService.getTransactions().then(function(data){
            vm.transactions = data;
        });

    }
})();