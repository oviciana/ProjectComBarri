(function() {
    angular
        .module('comBarrioApp')
        .controller('orderShopController', [
            '$routeParams',
            'comBarrioFactory',
            ProductsShopController,
        ])

    function ProductsShopController($routeParams, comBarrioFactory) {
        let vm = this
        let categories = []
        const idShop = $routeParams.id
        let listItems = []
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
                            listItems.splice(pos, 1)
                        } else {
                            listItems[pos] = insText
                        }
                        findpos = true
                    }
                }
                if (!findpos && vm.selItems[product] > 0) {
                    listItems.push(insText)
                }
            }
            vm.listItems = listItems
        }

        vm.getUserMail = () => {
            vm.mostrarBtnEnvio = false
            if (vm.nameUserMail != "") {
                vm.mostrarBtnEnvio = true   
            }
        }

        vm.sendMail = (e) => {
            e.preventDefault()
            const shopName = vm.shop.name
            const shopEmail = vm.shop.email
            const listItems = vm.listItems
            const prepareOrder = vm.prepareOrder
            const userName = vm.nameUserOrder
            const userMail = vm.nameUserMail
            const userPhone = vm.nameUserPhone

            vm.mostrarBtnEnvio = false
            if (vm.nameUserMail != "") {
                vm.mostrarBtnEnvio = true   
            }

            let listOrder = "<p><strong>LISTA DE PRODUCTOS</strong></p>"
            for (let pos = 0; pos < listItems.length; pos++) {
                if (pos == 0) {
                    listOrder += "<ul>"
                }
                listOrder += "<li>" + listItems[pos] + "</li>"
                if (pos == listItems.length - 1) {
                    listOrder += "</ul>"
                }
            }
            listOrder += "<p>" + prepareOrder + "</p>"
            console.log(listOrder)

            comBarrioFactory.sendMailOrder(shopName, shopEmail, listOrder, userName, userMail, userPhone)
                .then(() => {
                    console.log('Email sent from the controller')
                })
        }
    }
})()
