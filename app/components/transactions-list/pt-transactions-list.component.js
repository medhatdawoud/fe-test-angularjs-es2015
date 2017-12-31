import angular from 'angular';

class TransactionsCtrl {
  constructor() {
    this.sorting = 'transactionDate';
    this.sortingOrder = 'desc';
  }
}

const TransactionsListComponent = {
  bindings: {
    transactions: '=',
  },
  templateUrl: 'app/components/transactions-list/pt-transactions-list.view.html',
  controller: TransactionsCtrl,
  controllerAs: '$ctrl',
};

export default angular.module('TransactionsListComponent', [])
  .component('ptTransactionsList', TransactionsListComponent)
  .name;
