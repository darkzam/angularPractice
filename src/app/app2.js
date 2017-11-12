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
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Object.defineProperty(Car.prototype, "_brand", {
        get: function () {
            return this.brand;
        },
        set: function (brand) {
            this.brand = brand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "_model", {
        get: function () {
            return this.model;
        },
        set: function (model) {
            this.model = model;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var SportCar = /** @class */ (function (_super) {
    __extends(SportCar, _super);
    function SportCar(brand, model, avspeed, year, color) {
        var _this = _super.call(this, brand, model) || this;
        _this.avspeed = avspeed;
        _this.year = year;
        _this.color = color;
        return _this;
    }
    Object.defineProperty(SportCar.prototype, "_avspeed", {
        get: function () {
            return this.avspeed;
        },
        set: function (avspeed) {
            this.avspeed = avspeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SportCar.prototype, "_year", {
        get: function () {
            return this.year;
        },
        set: function (year) {
            this.year = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SportCar.prototype, "_color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: true,
        configurable: true
    });
    return SportCar;
}(Car));
var RaceCar = /** @class */ (function (_super) {
    __extends(RaceCar, _super);
    function RaceCar(brand, model, avspeed, year, color, maxspeed, brakequality, seats) {
        var _this = _super.call(this, brand, model, avspeed, year, color) || this;
        _this.maxspeed = maxspeed;
        _this.brakequality = brakequality;
        _this.seats = seats;
        return _this;
    }
    Object.defineProperty(RaceCar.prototype, "_maxSpeed", {
        get: function () {
            return this.maxspeed;
        },
        set: function (maxspeed) {
            this.maxspeed = maxspeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceCar.prototype, "_brakeQuality", {
        get: function () {
            return this.brakequality;
        },
        set: function (brakequality) {
            this.brakequality = brakequality;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RaceCar.prototype, "_seats", {
        get: function () {
            return this.seats;
        },
        set: function (seats) {
            this.seats = seats;
        },
        enumerable: true,
        configurable: true
    });
    return RaceCar;
}(SportCar));
var input1 = document.getElementById("brand");
var input2 = document.getElementById("modeln");
var input3 = document.getElementById("avspeed");
var input4 = document.getElementById("year");
var input5 = document.getElementById("color");
var input6 = document.getElementById("maxspeed");
var input7 = document.getElementById("brakequality");
var input8 = document.getElementById("seats");
var list = document.getElementById("carList");
var count = 1;
function validation() {
    if (isNaN(Number(input2.value)) || isNaN(Number(input3.value)) || isNaN(Number(input4.value)) || isNaN(Number(input6.value)) || isNaN(Number(input7.value)) || isNaN(Number(input8.value))) {
        return true;
    }
    return false;
}
function createCar() {
    if (validation())
        return;
    var car;
    //preguntar porque no tira error el string obtenido de modeln si en el contructor se espera model:Number
    car = new Car(input1.value, Number(input2.value));
    var item = document.createElement('div');
    item.className = "item";
    item.innerHTML = "<h4 class='ui dividing header'>" + (count++) + ") Car" + "</h4>"
        + "<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th></tr></thead>" +
        "<tbody><tr><td>" + car._brand + "</td><td>" + car._model + "</td></tr></tbody></table>";
    list.appendChild(item);
    console.log(car);
}
function createSportCar() {
    if (validation())
        return;
    var car;
    car = new SportCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value);
    var item = document.createElement('div');
    item.className = "item";
    item.innerHTML = "<h4 class='ui dividing header'>" + (count++) + ") SportCar=>Car" + "</h4>"
        + "<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th><th>Av Speed</th><th>Year</th><th>Color</th></tr></thead>" +
        "<tbody><tr><td>" + car._brand + "</td><td>" + car._model + "</td><td>" + car._avspeed + "</td><td>" + car._year + "</td><td>" + car._color + "</td></tr></tbody></table>";
    list.appendChild(item);
    console.log(car);
}
function createRaceCar() {
    if (validation())
        return;
    var car;
    car = new RaceCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value, Number(input6.value), Number(input7.value), Number(input8.value));
    var item = document.createElement('div');
    item.className = "item";
    item.innerHTML = "<h4 class='ui dividing header'>" + (count++) + ") RaceCar=>SportCar=>Car" + "</h4>"
        + "<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th><th>Av Speed</th><th>Year</th><th>Color</th><th>Max Speed</th><th>Brakequality</th><th>Seats</th></tr></thead>" +
        "<tbody><tr><td>" + car._brand + "</td><td>" + car._model + "</td><td>" + car._avspeed + "</td><td>" + car._year + "</td><td>" + car._color + "</td><td>" + car._maxSpeed + "</td><td>" + car._brakeQuality + "</td><td>" + car._seats + "</td></tr></tbody></table>";
    list.appendChild(item);
    console.log(car);
}
