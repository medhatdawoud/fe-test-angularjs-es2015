import angular from 'angular';
import ngRoute from 'angular-route';
import uiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';

import routes from './app.routes';
import TransactionsServiceModule from './services/transactions.service';
import TransferFormComponent from './components/transfer-form/pt-transfer-form.component';
import TransactionsListComponent from './components/transactions-list/pt-transactions-list.component';
import NavbarComponent from './components/navbar/pt-navbar.component';
import TransactionsController from './pages/transactions.controller';

const app = angular.module('peachtreeBank', [
  ngRoute,
  uiRouter,
  ngSanitize,
  NavbarComponent,
  TransferFormComponent,
  TransactionsListComponent,
  TransactionsServiceModule,
]);
app.config(routes);
app.controller('TransactionsController', TransactionsController);
