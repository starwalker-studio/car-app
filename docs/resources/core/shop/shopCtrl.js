"use strict";
app.controller('shopCtrl', ['$scope','CatalogService', function($scope, CatalogService){

    $(document).ready( function () {
		$('#car-shop-data').DataTable(
            {
                responsive: true,
                searching: true,
                paging: true,
                pageLength: 6,
                lengthMenu: [[6, 8, 10, -1], [6, 8, 10, "All"]]
            });	    
	}); 
    
    const tableShopData = document.querySelector('#purchases');
    const addShopData = document.querySelector('#cart');
    const catalog = CatalogService.getCatalog();
    $scope.trash = false;
    $scope.carCatalog = catalog;
    angular.forEach($scope.carCatalog, function(value) {
        const { price } = value;
        value.price = maskNumber(price);        
    });
    var shopCar = [];
    
    $scope.emptyTrash = function() {
        shopCar = [];
        emptyPrice();
        cartHTML();
        $scope.trash = false;
    }
    
    $scope.addCar = function() {
        $scope.trash = true;
        tableShopData.addEventListener('click', addToCart);
        addShopData.addEventListener('click' , deleteCar);
    }

    function deleteCar(e) {        
        const idCar = e.target.getAttribute('data-id');
        shopCar = shopCar.filter(car => car.id !== idCar);
        addPrice();
        cartHTML();
    }
    
    function addToCart(e) {
        const existCar = shopCar.some(car => car.id === e.path[3].childNodes[13].innerText);
        const addLimit = (shopCar.length > 2) ? true : false;
        if (!existCar && !addLimit) {
            const imgCar = {
                id: e.path[3].childNodes[13].innerText,
                img: e.path[3].childNodes[1].firstElementChild.src,
                price: e.path[3].childNodes[9].innerText
            }
            shopCar = [...shopCar, imgCar];
            cartHTML();
        }
        addPrice();
    }

    function addPrice() {
        const totalCarHTML = document.getElementById('total-car');
        const totalHTML = document.getElementById('total');
        let totalCars = 0;
        let shipping = 25;
        let tax = 19.22;
        shopCar.forEach(car => totalCars += unmaskNumber(car.price));
        totalCarHTML.innerText = "$" + maskNumber(totalCars);
        let total = totalCars + shipping + tax;
        totalHTML.innerText = "$" + maskNumber(total);
    }
    
    function emptyPrice() {
        const totalCarHTML = document.getElementById('total-car');
        const totalHTML = document.getElementById('total');
        totalCarHTML.innerText = "";
        totalHTML.innerText = "";
    }
    
    function cartHTML(){
        cleanHTML();
        shopCar.forEach(car => {
            const {img, id} = car;
            const row = document.createElement('tr');
            row.innerHTML = ` 
            <td>
            <img src="${img}" style="width: 13em;">
            <a type="button" 
                    style="padding-bottom: 10px;" 
                    data-id="${id}"
                    ng-click="" class="text-muted">Delete from cart</a>
            </td>`;
            addShopData.appendChild(row);
        })
    }

    function cleanHTML() {
        while(addShopData.firstChild) {
            addShopData.removeChild(addShopData.firstChild);
        }
    }

    function unmaskNumber(number) {
        let unmask = number;
        let setNumber = unmask.toString().replace(/[^\d]/g, "");
        return parseInt(setNumber);
    }

    function maskNumber(number) {
        let mask = number;
        let setNumber = mask.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");;
        return setNumber;
    }

}]);