(function () {
  angular.module('comBarrioApp')
    .controller('infoController', [
      '$routeParams',
      'comBarrioFactory',
      InfoPage
    ])
  function InfoPage ($routeParams, comBarrioFactory) {
     var vm = this
  //   var zipCode = $routeParams.zipCode
  //   var bussinesType = $routeParams.bussinesType
  //   comBarrioFactory.getListShops(zipCode,bussinesType)
  //   .then(function (response) {
  //     vm.listShops = response
  //   })
  // }
})()