class TransactionsController {
  constructor(transactionsService) {
    this.transactionsService = transactionsService;
    this.transactions = [];
    this.transactionsService.getTransactions()
      .then((data) => {
        this.transactions = data;
      });
  }
}

TransactionsController.$inject = ["TransactionsService"]

export default TransactionsController;
