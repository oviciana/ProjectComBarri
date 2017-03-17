(function() {
  angular.module('comBarrioApp')
    .controller('infoController', [
      '$routeParams',
      'comBarrioFactory',
      searchShops
    ])

  function searchShops($routeParams, comBarrioFactory) {
    // var vm = this
    // vm.searchZipCode = function(e) {
    //   e.preventDefault()
    //   comBarrioFactory.returnZipCode(vm.zipCode)
    //  comBarrioFactory.getShopsZipCode(vm.zipCode)
     }
  }
})()

