var app = angular.module('catalog.service', []);

app.service('CatalogService', [function () {

    const catalog = [
        {
            id: "lambo001",
            img: "resources/img/lambo.png",
            model: "Lamborghini Aventador",
            price: 425021,
            color: "Green",
            font_color: "darkseagreen",
            type: "Sport"   
        },
        {
            id: "ferrari002",
            img: "resources/img/ferrari.png",
            model: "Ferrari 458",
            price: 352088,
            color: "Red",
            font_color: "crimson",
            type: "Sport"   
        },
        {
            id: "mitsubishi003",
            img: "resources/img/mitsubishi.png",
            model: "Mitsubishi Eclipse 2011",
            price: 14597,
            color: "Dark Orange",
            font_color: "darkorange",
            type: "Coupé"   
        },
        {
            id: "lambo-centenario004",
            img: "resources/img/lambo-centenario.png",
            model: "Lamborghini Centenario",
            price: 519932,
            color: "Dark Gray",
            font_color: "slategrey",
            type: "Sport"   
        },
        {
            id: "bmw-sedan005",
            img: "resources/img/bmw-sedan.png",
            model: "Bmw M3 2018",
            price: 50717,
            color: "White",
            font_color: "gray",
            type: "Sedán"   
        },
        {
            id: "bmw-sedan006",
            img: "resources/img/chevrolet-camaro.png",
            model: "Chevrolet Camaro 2018",
            price: 200125,
            color: "Dark Blue",
            font_color: "cornflowerblue",
            type: "Coupé"   
        },
        {
            id: "bmw-i8007",
            img: "resources/img/bmw-i8.png",
            model: "Bmw I8 2019",
            price: 45900,
            color: "Gray",
            font_color: "gray",
            type: "Coupé"   
        },
        {
            id: "bmw-i8-convertible008",
            img: "resources/img/bmw-i8-convertible.png",
            model: "Bmw I8 Convertible 2019",
            price: 50000,
            color: "Metalic Orange",
            font_color: "tan",
            type: "Coupé"   
        },
        {
            id: "ecto-1009",
            img: "resources/img/ecto-1.png",
            model: "ECTO-1",
            price: 800000,
            color: "White",
            font_color: "gray",
            type: "Ghost Buster"   
        },
        {
            id: "jurassic010",
            img: "resources/img/jurassic.png",
            model: "Jurassic Ford Explorer",
            price: 450000,
            color: "-",
            font_color: "black",
            type: "Dino Hunter"   
        },
        {
            id: "delorean011",
            img: "resources/img/delorean.png",
            model: "Delorean",
            price: 1000000,
            color: "Silver",
            font_color: "gray",
            type: "Time Machine"   
        },
        {
            id: "batmobile012",
            img: "resources/img/batmobile.png",
            model: "Batmobile 1989",
            price: 15000500,
            color: "Black",
            font_color: "black",
            type: "Vigilante"   
        },
        {
            id: "kitt013",
            img: "resources/img/kitt.png",
            model: "K.I.T.T.",
            price: 5000000,
            color: "Black",
            font_color: "black",
            type: "Detective"   
        }
    ]

    var context = this;

    context.getCatalog = function() {
        return catalog;
    }

    return context;

}])