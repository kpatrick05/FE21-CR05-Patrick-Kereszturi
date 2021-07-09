var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
// Creating the Parent Class
var Locations = /** @class */ (function () {
    function Locations(city, zip, img, address, name, visited) {
        this.city = city;
        this.zip = zip;
        this.img = img;
        this.address = address;
        this.name = name;
        this.visited = visited;
        arr.push(this);
    }
    Locations.prototype.display = function () {
        return "\n        <div class=\" mb-3 col col-12 col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch \">\n        <div class=\"row g-1 container-fluid card shadow-lg bg-card-color\">\n        <div class=\"container-fluid\">\n        <img  style=\"width:100%; height:220px; object-fit: cover;\" src=\"" + this.img + "\" class=\"card-img-top d-sm-none d-md-block d-none img-fluid\" alt=\"...\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.name + "</h5>\n        <p class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</p>\n        <p class=\"card-text\">Visited: " + this.visited + "</p>\n        \n        ";
    };
    Locations.prototype.closingDiv = function () {
        return "\n        </div>\n        </div>\n        </div>\n        </div>";
    };
    return Locations;
}());
//Creating child Restaurants class of Locations
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, zip, img, address, name, visited, tel, typof, web) {
        var _this = _super.call(this, city, zip, img, address, name, visited) || this;
        _this.tel = tel;
        _this.typof = typof;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return _super.prototype.display.call(this) + " \n        <p class=\"card-text\">Tel: " + this.tel + "  </p>\n        <p class=\"card-text\"> <a class=\"text-white\" href=\"" + this.web + "\">" + this.web + "</a></p>\n        ";
    };
    return Restaurants;
}(Locations));
//Creating child class Events of Locations
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip, img, address, name, visited, eventDate, eventTime, web, price) {
        var _this = _super.call(this, city, zip, img, address, name, visited) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.web = web;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.display.call(this) + " \n        <p class=\"card-text\">" + this.eventDate + " " + this.eventTime + "</p>\n        <p class=\"card-text\">" + this.price + " </p>\n     <a class=\"text-white\" href=\"" + this.web + "\">" + this.web + "</a> \n        \n        ";
    };
    return Events;
}(Locations));
// Data update
new Locations("Vienna", 1010, "../img/stephan.jpg", "Stephansplatz 3", "Stephansdom", "2018-03-18 10:30");
new Locations("Vienna", 1130, "../img/schonbrunn.jpg", "Schönbrunner Schloßstraße 47", "Schloss Schönbrunn", "2020-03-18 11:23");
new Locations("Vienna", 1060, "../img/meer.jpg", "Fritz-Grünbaum-Platz 1", "Haus des Meeres", "2021-05-18 15:55");
new Restaurants("Vienna", 1060, "../img/peter.jpg", "Mariahilfer Str. 127", "Peter Panne", "2019-08-18 9:55", "+431595353020", "Burger", "https://www.peterpane.de/");
new Restaurants("Vienna", 1150, "../img/riva.jpg", "Favoritenstraße 4/6", "Pizzeria RIVA Favorita", "2021-05-25 15:10", "+43 1 3534040", "Italienish", "https://riva.pizza/");
new Restaurants("Vienna", 1150, "../img/maria.jpg", "Mariahilfer Str. 152", "Mariahilferbräu", "2015-09-18 10:55", "+431595353020", "Österreichish", "https://mariahilferbrau.com/");
new Events("Vienna", 1130, "../img/solomun.jpg", "Schloss Schönbrunn", "Solomun", "2018-03-18 19:55", "15.09.2021", "16:00", "https://www.ots.at/presseaussendung/OTS_20210706_OTS0152/imperialis-schloss-schoenbrunn-wien-foto/", " € 30.09 ");
new Events("Vienna", 1150, "../img/charlotte.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Charlotte De Witte", "2019-05-18 16:37", "15.09.2021", "23:00", "https://en.wikipedia.org/wiki/Charlotte_de_Witte", " € 35.99 ");
new Events("Vienna", 1150, "../img/tale.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Tale Of Us", "2018-03-18 14:25", "18.10.2021 14:25", "02:00", "https://en.wikipedia.org/wiki/Tale_of_Us_(DJs)", " € 25.99 ");
// Data update ENDS
//looping the outpot to html
var text = "";
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    text += val.display() + val.closingDiv();
}
document.getElementById("location").innerHTML = text;
//looping the outpot to html
document.getElementById("sort-descending").addEventListener("click", sortDes);
document.getElementById("sort-ascending").addEventListener("click", sortAs);
//Function Sort Descending
function sortDes() {
    arr.sort(function (a, b) {
        var dateA = new Date(a.visited), dateB = new Date(b.visited);
        return dateB - dateA;
    });
    console.log(arr);
    var text = "";
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var val = arr_2[_i];
        text += val.display() + val.closingDiv();
    }
    document.getElementById("location").innerHTML = text;
}
//Function Sort Ascending
function sortAs() {
    arr.sort(function (a, b) {
        var dateA = new Date(a.visited), dateB = new Date(b.visited);
        return dateA - dateB;
    });
    console.log(arr);
    var text = "";
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var val = arr_3[_i];
        text += val.display() + val.closingDiv();
    }
    document.getElementById("location").innerHTML = text;
}
