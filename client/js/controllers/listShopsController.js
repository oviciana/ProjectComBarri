(function() {
    angular.module('comBarrioApp')
    .controller('listShopsController', [
        'comBarrioFactory',
        '$routeParams',
        '$rootScope',
        '$window',
        'GMapService',
        searchShops
    ])

    function searchShops(comBarrioFactory, $routeParams, $rootScope, $window, GMapService) {
        let vm = this
        let typeBussines = []
        let shop

        comBarrioFactory.getShopsZipCode($routeParams.zipCode)
        .then(function(response) {
            vm.zipCode = $routeParams.zipCode
            vm.shopsFound = response
            for (var i in response) {
                if (typeBussines.indexOf(response[i].bussinessType) < 0) {
                    typeBussines.push(response[i].bussinessType)
                }
            }
            vm.typeBussines = typeBussines
            $rootScope.shopsFound = response
            shop = response
        })
        .then(GMapService.getMarkers)

        vm.filterMap = () => {
            if(vm.query === '') {
                $rootScope.shopsFound = shop
            } else {
            $rootScope.shopsFound = shop.filter(elem => elem.bussinessType === vm.query)
        }
            GMapService.getMarkers()
        }
    }
})()
