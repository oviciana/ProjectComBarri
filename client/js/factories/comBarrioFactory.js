(function() {

  angular.module("comBarrioApp")
    .factory("comBarrioFactory", function($http, constApp) {

      function getShopProducts(idShop){
        var url = constApp.urlMain + '/shop/' + idShop
        return $http.get(url)
      }

      function getListShops(zipCode,bussinesType) {
        var url = constApp.urlMain + '/shop/' + zipCode + '/' + bussinesType
        return $http.get(url)
      }

      return {
        getShopProducts: getShopProducts,
        getListShops   : getListShops,
      }
    })
})()
