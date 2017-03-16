(function () {
  angular.module('comBarrioApp')
    .controller('listShopsController', [
      '$routeParams',
      'comBarrioFactory',
      FindShops
    ])
  function FindShops ($routeParams, comBarrioFactory) {
    var vm = this
    var zipCode = $routeParams.zipCode
    var bussinesType = $routeParams.bussinesType
    comBarrioFactory.getListShops(zipCode,bussinesType)
    .then(function (response) {
      vm.listShops = response
console.log(response)
    })
  }
})()