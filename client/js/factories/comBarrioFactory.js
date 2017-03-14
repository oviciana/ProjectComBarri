(function() {

  angular.module("comBarrioApp")
    .factory("comBarrioFactory", function($http) {

      function getShopProducts(){
        var url = 'https://comer-barri17.herokuapp.com/shop/'
        return $http.get(url)
      }

      return {
        getShopProducts: getShopProducts,
      }
    })
})()
