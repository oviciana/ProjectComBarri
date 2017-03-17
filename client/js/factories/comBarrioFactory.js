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
        .then(function (response) {
            return response.data
          }).catch(function (error) {
            return error
          })
      }

      return {
        getShopsZipCode: getShopsZipCode,
        getShopProducts: getShopProducts,

      }
    })
})()
