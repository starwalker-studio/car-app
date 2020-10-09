app.controller('mustangCtrl', ['$scope', 'CatalogService', function($scope, CatalogService){
    
    $scope.titleTrms = 'Transmissions.';
    $scope.p1 = 'Mustang offers three available transmissions, the 10-speed automatic,' +
    'TREMEC® six-speed manual, and the TREMEC seven-speed dual-clutch transmission, ' +
    'each designed to get the most out of your vehicle. Standard on the Shelby GT500 the all-new TREMEC ' +
    'seven-speed dual-clutch transmission is the first ever dual clutch transmission in a Mustang.' + 
    'The system comes with multiple modes to make for lightning-fast shifts whether you’re on the street or the track.';
    $scope.titlePrf = 'Unparalleled performance.';
    $scope.p2 = 'Six available high-powered engines means that every 2020 Mustang comes with performance in its DNA.' +
    'And with nine unique trims, you’ve got options, from the fun and energetic GT Convertible to the 2020 Shelby GT500® ,' +
    'host to the most power-dense supercharged V8 production engine in the world.';
    $scope.titleAvl = 'Available Ford Safe and Smart™ Package.';
    $scope.p3 = 'This suite of driver-assist technologies includes Pre-Collision Assist with Automatic Emergency Braking,' +
    'Auto High Beam headlamps, Lane-Keeping System, Adaptive Cruise Control and rain-sensing wipers.';

    const catalog = CatalogService.getCatalog();
    const {model: lamboModel ,img: lamboImg, price: lamboPrice} = catalog[0];  
    const {model: camaroModel ,img: camaroImg, price: camaroPrice} = catalog[5];  
    $scope.lmodel = lamboModel;
    $scope.limg = lamboImg;
    $scope.lprice = maskNumber(lamboPrice);
    $scope.cmodel = camaroModel;
    $scope.cimg = camaroImg;
    $scope.cprice = maskNumber(camaroPrice);
    $scope.goShop = function() {
        window.location = '#/shop';
    }

    function maskNumber(number) {
        let mask = number;
        let setNumber = mask.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");;
        return setNumber;
    }
	 
}]);