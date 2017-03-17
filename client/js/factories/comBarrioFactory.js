(function() {

  angular.module("comBarrioApp")
    .factory("comBarrioFactory", function($http, constApp) {

      function getShopsZipCode(zipCode) {
        var url = constApp.urlMain + '/shops/zipCode/' + zipCode
        return $http.get(url)
          .then(function (response) {
            return response.data
          }).catch(function (error) {
            return error
          })
      }

      function getShopProducts(idShop){
        var url = constApp.urlMain + '/shop/' + idShop
        return $http.get(url)
      }

      function getListShops(zipCode,bussinesType) {
        var url = constApp.urlMain + '/shop/' + zipCode + '/' + bussinesType
        return $http.get(url)
      }

      return {
        getShopsZipCode: getShopsZipCode,
        getShopProducts: getShopProducts,
        getListShops   : getListShops,
      }
    })
})()
