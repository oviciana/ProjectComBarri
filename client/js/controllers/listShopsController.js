(function() {
  angular.module('comBarrioApp')
    .controller('listShopsController', [
      'comBarrioFactory',
      '$routeParams',
      searchShops
    ])

  function searchShops(comBarrioFactory, $routeParams) {
    var vm = this
    comBarrioFactory.getShopsZipCode($routeParams.zipCode)
    .then(function(response) {
      vm.zipCode = $routeParams.zipCode
      vm.shopsFound = response
    })
  }
})()

