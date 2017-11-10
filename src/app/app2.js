var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return car;
}());
var sportCar = /** @class */ (function (_super) {
    __extends(sportCar, _super);
    function sportCar(brand, model, avspeed, year, color) {
        var _this = _super.call(this, brand, model) || this;
        _this.avspeed = avspeed;
        _this.year = year;
        _this.color = color;
        return _this;
    }
    return sportCar;
}(car));
var raceCar = /** @class */ (function (_super) {
    __extends(raceCar, _super);
    function raceCar(brand, model, avspeed, year, color, maxspeed, brakequality, seats) {
        var _this = _super.call(this, brand, model, avspeed, year, color) || this;
        _this.maxspeed = maxspeed;
        _this.brakequality = brakequality;
        _this.seats = seats;
        return _this;
    }
    return raceCar;
}(sportCar));
var c1 = new car("aveo", 343);
console.log(c1);
function createCar() {
    var x = document.getElementById("modeln").value;
    var y = document.getElementById("brand").value;
    document.getElementById("showCar").innerHTML = x + " " + y;
}
function createSportCar() {
    var x = document.getElementById("avspeed").value;
    var y = document.getElementById("year").value;
    var z = document.getElementById("color").value;
    document.getElementById("showSportCar").innerHTML = x + " " + y + " " + z;
}
function createRaceCar() {
    var x = document.getElementById("maxspeed").value;
    var y = document.getElementById("brakequality").value;
    var z = document.getElementById("seats").value;
    document.getElementById("showRaceCar").innerHTML = x + " " + y + " " + z;
}
