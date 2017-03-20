(function() {
  angular.module('comBarrioApp')
    .controller('listShopsController', [
      'comBarrioFactory',
      '$routeParams',
      '$rootScope',
      'GMapService',
      searchShops
    ])

  function searchShops(comBarrioFactory, $routeParams,$rootScope,GMapService) {
    var vm = this
    var typeBussines = []

    comBarrioFactory.getShopsZipCode($routeParams.zipCode)
    .then(function(response) {
      vm.zipCode = $routeParams.zipCode
      vm.shopsFound = response
      for (var i in response ){
        if (typeBussines.indexOf(response[i].bussinessType) < 0 ) {
          typeBussines.push(response[i].bussinessType)
        }
      }
      vm.typeBussines = typeBussines
    })
  }
})()

