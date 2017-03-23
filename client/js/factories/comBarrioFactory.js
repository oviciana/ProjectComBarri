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

      function sendMailOrder(shopName,shopEmail,listOrder,userName,userMail,userPhone){
        var url = constApp.urlMain + '/sendMail'
        var data = {shopName,shopEmail,listOrder,userName,userMail,userPhone}
        return $http.post(url,data)
        .then(
          console.log("send a email")
        )
      }

      return {
        getShopsZipCode: getShopsZipCode,
        getShopProducts: getShopProducts,
        sendMailOrder: sendMailOrder,
      }
    })
})()
