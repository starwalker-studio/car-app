var app = angular.module('userLocalCars.service', []);

app.service('UserLocalCarsService', [function () {

    const cars = [
        {
            id: "FO001",
            name: "2020 Ford Mustang GT500",
            date: "19/08/2020, 09:05:15",
            card: "Visa",
            payment_account: "Succes",
            amount_account: "$250000",
            table_detail_payment: "badge-soft-success badge rounded-capsule",
            table_detail_icon: "fa fa-check",
            img: "resources/img/mustang.png",
            topSpeed: 80,
            acceleration: 90,
            fuel : 75,
            brakes: 95
        },
        {
            id: "FO002",
            name: "2002 Ford Raptor",
            date: "24/08/2020, 01:57:03",
            card: "Master Card",
            payment_account: "Pending",
            amount_account: "-$17500",
            table_detail_payment: "badge-soft-warning badge rounded-capsule",
            table_detail_icon: "fa fa-bars",
            img: "resources/img/raptor.png",
            topSpeed: 65,
            acceleration: 75,
            fuel : 80,
            brakes: 80
        },
        {
            id: "FO003",
            name: "2000 Ford ecoSport",
            date: "22/09/2020, 07:32:00",
            card: "Master Card",
            payment_account: "Pending",
            amount_account: "-$9005",
            table_detail_payment: "badge-soft-warning badge rounded-capsule",
            table_detail_icon: "fa fa-bars",
            img: "resources/img/ecosport.png",
            topSpeed: 45,
            acceleration: 70,
            fuel : 80,
            brakes: 75
        },
        {
            id: "FO004",
            name: "1994 Ford Thunderbird",
            date: "23/09/2020, 12:35:18",
            card: "Visa",
            payment_account: "Succes",
            amount_account: "$20000",
            table_detail_payment: "badge-soft-success badge rounded-capsule",
            table_detail_icon: "fa fa-check",
            img: "resources/img/thunderbirdlx.png",
            topSpeed: 85,
            acceleration: 70,
            fuel : 45,
            brakes: 80
        },
        {
            id: "FO005",
            name: "2010 Ford Fusion",
            date: "23/09/2020, 12:35:18",
            card: "Visa",
            payment_account: "Pending",
            amount_account: "-$10566",
            table_detail_payment: "badge-soft-warning badge rounded-capsule",
            table_detail_icon: "fa fa-check",
            img: "resources/img/fusion.png",
            topSpeed: 60,
            acceleration: 68,
            fuel : 75,
            brakes: 73
        }
    ]

    var context = this;

    context.getUserCars = function () {
        return cars;
    }

    return context;


}])