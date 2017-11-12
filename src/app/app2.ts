
class Car{

  private brand :string ;
  private model : number;

  constructor(brand:string,model:number){
    this.brand = brand;
    this.model = model;
  }

  get _brand():string{
    return this.brand;
  }

  get _model():number{
    return this.model;
  }

  set _brand(brand: string){
    this.brand = brand;
  }

  set _model(model: number){
    this.model = model;
  }


}

class SportCar extends Car{

  private avspeed: number;
  private year : number;
  private color : string;

  constructor(brand:string, model:number, avspeed:number, year:number, color:string){
    super(brand,model);
    this.avspeed = avspeed;
    this.year = year;
    this.color = color;
  }

  get _avspeed():number{
    return this.avspeed;
  }

  get _year():number{
    return this.year;
  }

  get _color():string{
    return this.color;
  }

  set _avspeed(avspeed:number){
    this.avspeed = avspeed;
  }

  set _year(year:number){
    this.year = year;
  }

  set _color(color:string){
    this.color = color;
  }

}

class RaceCar extends SportCar{

  private maxspeed :number;
  private brakequality :number;
  private seats :number;

  constructor(brand:string, model:number, avspeed:number, year:number, color:string, maxspeed:number, brakequality:number, seats:number){
    super(brand, model, avspeed, year, color)
    this.maxspeed = maxspeed;
    this.brakequality = brakequality;
    this.seats = seats;
  }

  get _maxSpeed():number{
    return this.maxspeed;
  }

  get _brakeQuality():number{
    return this.brakequality;
  }

  get _seats():number{
    return this.seats;
  }

  set _maxSpeed(maxspeed:number){
    this.maxspeed = maxspeed;
  }

  set _brakeQuality(brakequality:number){
    this.brakequality = brakequality;
  }

  set _seats(seats:number){
    this.seats = seats;
  }

}

var input1 = <HTMLInputElement> document.getElementById("brand");
var input2 = <HTMLInputElement> document.getElementById("modeln");


function createCar() {

    let car:Car;
    //preguntar porque no tira error el string obtenido de modeln si en el contructor se espera model:Number
    car = new Car( input1.value, Number(input2.value) );

 //   var x = document.getElementById("modeln").value;
  //  var y = document.getElementById("brand").value;
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model ;
    console.log(car);
}

var input3 = <HTMLInputElement>document.getElementById("avspeed");
var input4 = <HTMLInputElement>document.getElementById("year");
var input5 = <HTMLInputElement>document.getElementById("color");

function createSportCar() {
   
    let car:SportCar;
     car = new SportCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value);
    document.getElementById("showCar").innerHTML = car._brand + " " + car._model ; document.getElementById("showCar").innerHTML = car._brand + " " + car._model ;
    document.getElementById("showSportCar").innerHTML = car._avspeed + " " + car._year + " " + car._color;
   console.log(car);
}

var input6 = <HTMLInputElement>document.getElementById("maxspeed");
var input7 = <HTMLInputElement>document.getElementById("brakequality");
var input8 = <HTMLInputElement>document.getElementById("seats");

function createRaceCar() {
   
   let car:RaceCar;
   car = new RaceCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value, Number(input6.value),Number(input7.value), Number(input8.value));
   document.getElementById("showCar").innerHTML = car._brand + " " + car._model ; document.getElementById("showCar").innerHTML = car._brand + " " + car._model ;
   document.getElementById("showSportCar").innerHTML = car._avspeed + " " + car._year + " " + car._color;
   document.getElementById("showRaceCar").innerHTML = car._maxSpeed + " " + car._brakeQuality + " " + car._seats;
   console.log(car);
}
