
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


var input1 = <HTMLInputElement>document.getElementById("brand");
var input2 = <HTMLInputElement>document.getElementById("modeln");
var input3 = <HTMLInputElement>document.getElementById("avspeed");
var input4 = <HTMLInputElement>document.getElementById("year");
var input5 = <HTMLInputElement>document.getElementById("color");
var input6 = <HTMLInputElement>document.getElementById("maxspeed");
var input7 = <HTMLInputElement>document.getElementById("brakequality");
var input8 = <HTMLInputElement>document.getElementById("seats");

var list = document.getElementById("carList");
var count = 1;


function validation(){

  if(isNaN(Number(input2.value))||isNaN(Number(input3.value))||isNaN(Number(input4.value))||isNaN(Number(input6.value))||isNaN(Number(input7.value))||isNaN(Number(input8.value))){

    return true;
  }

  return false;
}

function createCar() {

  if(validation())
    return ;
  
  let car:Car;
  //preguntar porque no tira error el string obtenido de modeln si en el contructor se espera model:Number
  car = new Car( input1.value, Number(input2.value) );

  let item = document.createElement('div');
  item.className = "item";
  item.innerHTML = "<h4 class='ui dividing header'>"+ (count++) +") Car"+"</h4>"
  +"<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th></tr></thead>"+
  "<tbody><tr><td>"+ car._brand +"</td><td>" + car._model + "</td></tr></tbody></table>";

  list.appendChild(item);
  console.log(car);
}

function createSportCar() {

  if(validation())
    return ;

  let car:SportCar;
  car = new SportCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value);
  
  let item = document.createElement('div');
  item.className = "item";
  item.innerHTML = "<h4 class='ui dividing header'>"+ (count++) +") SportCar=>Car"+"</h4>"
  +"<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th><th>Av Speed</th><th>Year</th><th>Color</th></tr></thead>"+
  "<tbody><tr><td>"+ car._brand +"</td><td>" + car._model + "</td><td>"+car._avspeed+"</td><td>"+car._year+"</td><td>"+car._color+"</td></tr></tbody></table>";

  list.appendChild(item);
  console.log(car);
}

function createRaceCar() {

  if(validation())
    return ;

  let car:RaceCar;
  car = new RaceCar(input1.value, Number(input2.value), Number(input3.value), Number(input4.value), input5.value, Number(input6.value),Number(input7.value), Number(input8.value));

  let item = document.createElement('div');
  item.className = "item";
  item.innerHTML = "<h4 class='ui dividing header'>"+ (count++) +") RaceCar=>SportCar=>Car"+"</h4>"
  +"<table class='ui celled table'><thead><tr><th>Brand</th><th>Model</th><th>Av Speed</th><th>Year</th><th>Color</th><th>Max Speed</th><th>Brakequality</th><th>Seats</th></tr></thead>"+
  "<tbody><tr><td>"+ car._brand +"</td><td>" + car._model + "</td><td>"+car._avspeed+"</td><td>"+car._year+"</td><td>"+car._color+"</td><td>"+car._maxSpeed+"</td><td>"+car._brakeQuality+"</td><td>"+car._seats+"</td></tr></tbody></table>";

  list.appendChild(item);
  console.log(car);
}

