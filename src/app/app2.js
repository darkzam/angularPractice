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
var list = document.getElementById("carList");
var input1 = document.getElementById("brand");
var input2 = document.getElementById("modeln");
var count = 1;
function createCar() {
    var car;
    //preguntar porque no tira error el string obtenido de modeln si en el contructor se espera model:Number
    car = new Car(input1.value, Number(input2.value));
    var item = document.createElement('div');
    item.className = "item";
    var header = document.createElement('div');
    header.className = "header";
    header.appendChild(document.createTextNode("Car " + count++));
    var div = document.createElement('div');
    div.className = "ui segment";
    div.appendChild(header);
    div.appendChild(document.createTextNode(car._brand + " " + car._model));
    item.appendChild(div);
    list.appendChild(item);
    list.innerHTML = "<div class='ui container'>epa la arepa</div>";
    //  document.getElementById("showCar").innerHTML = car._brand + " " + car._model ;
    console.log(car);
}
var input3 = document.getElementById("avspeed");
var input4 = document.getElementById("year");
var input5 = document.getElementById("color");
function createSportCar() {
    var car;
    car = new SportCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value);
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model;
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model;
    document.getElementById("showSportCar").innerHTML = car._avspeed + " " + car._year + " " + car._color;
    console.log(car);
}
var input6 = document.getElementById("maxspeed");
var input7 = document.getElementById("brakequality");
var input8 = document.getElementById("seats");
function createRaceCar() {
    var car;
    car = new RaceCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value, Number(input6.value), Number(input7.value), Number(input8.value));
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model;
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model;
    document.getElementById("showSportCar").innerHTML = car._avspeed + " " + car._year + " " + car._color;
    document.getElementById("showRaceCar").innerHTML = car._maxSpeed + " " + car._brakeQuality + " " + car._seats;
    console.log(car);
}
