function routes(urlRouterProvider, stateProvider) {
  urlRouterProvider.otherwise('/');
  stateProvider
    .state('transactions', {
      url: '/',
      templateUrl: 'app/pages/transactions.view.html',
      controller: 'TransactionsController',
      controllerAs: '$ctrl',
    });
}

routes.$inject = ['$urlRouterProvider', '$stateProvider'];

export default routes;
