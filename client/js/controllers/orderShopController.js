(function() {
    angular
        .module('comBarrioApp')
        .controller('orderShopController', [
            '$scope',
            '$rootScope',
            '$routeParams',
            'comBarrioFactory',
            ProductsShopController
        ])

    function ProductsShopController($scope, $rootScope, $routeParams, comBarrioFactory) {
        let vm = this
        let categories = []
        const idShop = $routeParams.id
        let listItems = []
        vm.required = true

        comBarrioFactory.getShopProducts(idShop)
            .then(function(response) {
                vm.shop = response
                for (let i in response.idShopProducts.products) {
                    if (categories.indexOf(response.idShopProducts.products[i].category) < 0) {
                        categories.push(response.idShopProducts.products[i].category)
                    }
                }
                vm.categories = categories
            })

        vm.accordion = {
            current: null
        }

        vm.readItems = () => {
            for (let product in vm.selItems) {
                let insText = vm.selItems[product] + " " + product
                let findpos = false
                for (pos = listItems.length - 1; pos >= 0; pos--) {
                    if (listItems[pos].search(product) > 0) {
                        if (vm.selItems[product] == 0) {
                            listItems.splice(pos,1)
                        } else {
                            listItems[pos] = insText
                        }
                        findpos = true
                    }
                }
                if (!findpos && vm.selItems[product] > 0 ) {
                    listItems.push(insText)
                }
            }
            vm.listItems = listItems
        }
      
    }
})()
