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
    vm.title = $routeParams.author
    comBarrioFactory.getShopProducts($routeParams.)
    .then(function (response) {
      vm. = response
    })
  }
})()