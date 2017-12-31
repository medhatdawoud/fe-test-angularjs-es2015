import angular from 'angular';

class TransactionsService {
  constructor($http) {
    this.$http = $http;
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.$http.get('transactions.json')
      .then((response) => {
        this.transactions = response.data.data;
        return this.transactions;
      });
  }
}

TransactionsService.$inject = ['$http'];

export default angular.module('TransactionsServiceModule', [])
  .service('TransactionsService', TransactionsService)
  .name;
