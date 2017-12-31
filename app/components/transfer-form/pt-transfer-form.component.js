import angular from "angular";
import TransactionsServiceModule from "../../services/transactions.service";

class TransferFormCtrl {
  constructor(transactions) {
    this.transactions = transactions;
    this.fullBalance = 5824.76;
    this.raw = {
      amount: null,
      categoryCode: "#12a580",
      merchant: null,
      merchantLogo: "assets/images/icon1.jpg",
      transactionDate: new Date(),
      transactionType: "Card Payment"
    };
    this.trans = Object.assign({}, this.raw);
  }

  add() {
    this.transactions.addTransaction(this.trans);
    this.fullBalance -= this.trans.amount;
    this.trans = Object.assign({}, this.raw);
  }
}

let transferFormComponent = {
  templateUrl: "app/components/transfer-form/pt-transfer-form.view.html",
  controller: TransferFormCtrl,
  bindings: {},
};

transferFormComponent.$inject = ["TransactionsService"];

export default angular.module("TransferForm", [TransactionsServiceModule])
  .component("ptTransferForm", transferFormComponent)
  .name;
