"use strict";
app.controller('carCtrl', ['$scope', 'UserLocalCarsService', function ($scope, UserLocalCarsService) {

    const cars = UserLocalCarsService.getUserCars();
    $scope.myCars = cars;
    $scope.showCarDetails = false;

    $scope.loadCar = function () {
        $scope.showCarDetails = true;
        const tableCarData = document.querySelector('#car-table-data');
        const imgCar = document.getElementById('img-car');
        const topSpeedBar = document.getElementById('top-speed-bar');
        const topSpeedBarText = document.getElementById('top-speed-text');
        const accelerationBar = document.getElementById('acc-bar');
        const accelerationText = document.getElementById('acc-text');
        const fuelBar = document.getElementById('fuel-bar');
        const fuelText = document.getElementById('fuel-text');
        const brakesBar = document.getElementById('brakes-bar');
        const brakesText = document.getElementById('brakes-text');
        console.log(imgCar);
        console.log(topSpeedBar);
        tableCarData.addEventListener('click', function (e) {
            let carDetails = cars.find(car => car.id === e.path[3].childNodes[1].innerText);
            let { img, topSpeed, acceleration, brakes, fuel } = carDetails;
            imgCar.src = img;
            topSpeedBar.style = "width: " + topSpeed + "%";
            topSpeedBarText.innerText = "Top Speed: " + topSpeed + "%";
            accelerationBar.style = "width: " + acceleration + "%";
            accelerationText.innerText = "Acceleration: " + acceleration + "%";
            fuelBar.style = "width: " + fuel + "%";
            fuelText.innerText = "Fuel Efficency: " + fuel + "%";
            brakesBar.style = "width: " + brakes + "%";
            brakesText.innerText = "Brakes: " + brakes + "%";
        });
    }

    $scope.close = function() {
        $scope.showCarDetails = false;    
    }

}]);