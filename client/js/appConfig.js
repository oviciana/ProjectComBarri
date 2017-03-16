(function () {
  angular.module('comBarrioApp')
  .config(['$routeProvider',routerConfig])

  function routerConfig ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/infoPage.html',
        controller: 'infoController',
        controllerAs: 'vm'        
      })
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
      .otherwise('/')
  }
})()
