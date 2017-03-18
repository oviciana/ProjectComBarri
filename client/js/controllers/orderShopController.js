(function () {
  angular
  .module('comBarrioApp')
    .controller('orderShopController', [
      '$rootScope',
      '$routeParams',
      'comBarrioFactory',
      ProductsShopController
    ])
  function ProductsShopController ($rootScope, $routeParams, comBarrioFactory) {
    var vm = this
    var categories = []
    const idShop = $routeParams.id

    $rootScope.selItems = {
      name : "",
      quantity : "",
    }

    comBarrioFactory.getShopProducts(idShop)
      .then(function (response) {
        vm.shop = response
        for (var i in response.products ){
          if (categories.indexOf(response.products[i].category) < 0 ) {
            categories.push(response.products[i].category)
          }
        }
        vm.categories = categories
      })
  }
})()
