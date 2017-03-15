(function () {
  angular
  .module('comBarrioApp')
  .config([
    '$routeProvider',
    routerConfig
  ])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/shops/:id', {
        templateUrl: 'views/orderShop.html',
        controller: 'orderShopController',
        controllerAs: 'vm'
      })
      .when('/shops/:zipCode/:bussinessType', {
        templateUrl: 'views/listShops.html',
        controller: 'listShopsController',
        controllerAs: 'vm'
      })
      // .when('/author/:author', {
      //   templateUrl: 'app/author/author.tpl.html',
      //   controller: 'AuthorController',
      //   controllerAs: 'vm'
      // })
      .otherwise('/')
  }
})()
