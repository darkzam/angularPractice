
class car{

  brand :string ;
  model : number;

  constructor(brand,model){
    this.brand = brand;
    this.model = model;
  }


}

class sportCar extends car{

  avspeed: number;
  year : number;
  color : string;

  constructor(brand, model, avspeed, year, color){
    super(brand,model);
    this.avspeed = avspeed;
    this.year = year;
    this.color = color;
  }

}

class raceCar extends sportCar{

  maxspeed: number;
  brakequality: number;
  seats: number;

  constructor(brand, model, avspeed, year, color, maxspeed, brakequality, seats){
    super(brand, model, avspeed, year, color)
    this.maxspeed = maxspeed;
    this.brakequality = brakequality;
    this.seats = seats;
  }

}

var c1 = new car("aveo", 343);
console.log(c1);

function createCar() {
    var x = document.getElementById("modeln").value;
    var y = document.getElementById("brand").value;
    document.getElementById("showCar").innerHTML = x + " " + y ;
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
