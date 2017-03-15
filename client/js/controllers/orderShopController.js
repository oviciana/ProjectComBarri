(function () {
  angular
  .module('comBarrioApp')
    .controller('orderShopController', [
      '$routeParams',
      'comBarrioFactory',
      ProductsShopController
    ])
  function ProductsShopController ($routeParams, comBarrioFactory) {
    var vm = this
    var idShop = $routeParams.idShop
    comBarrioFactory.getShopProducts(idShop)
    .then(function (response) {
      vm.shop = response
    })
  }
})()