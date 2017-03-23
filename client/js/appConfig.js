(function () {
  angular.module('comBarrioApp')
  .config(['$routeProvider',routerConfig])

  function routerConfig ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/infoPage.html',      
      })

      .when('/shops/zipCode/:zipCode', {
        templateUrl: 'views/listShops.html',
        controller: 'listShopsController',
        controllerAs: 'vm'
      })

      .when('/shop/:id', {
        templateUrl: 'views/orderShop.html',
        controller: 'orderShopController',
        controllerAs: 'vm'
      })

//       .when('/sendMail', {
// //        templateUrl: 'views/sendMailModal.html',
//         controller: 'sendMailController',
//         controllerAs: 'vm',
//       })
     
      .otherwise({
        redirectTo: '/'
      });
  }
})()
