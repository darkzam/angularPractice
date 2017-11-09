
var container1 = document.getElementById('container');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');

function calculate(x:( string | number[])):any[]{

  if( typeof x === "string"){

  var arraystr= x.split("");

   return arraystr.reverse();

  }

  if(x instanceof Array){

  var arratresult =array();

   for(let u of x){

   arraresult.push(pow2(parseInt(u)))

   }

   return arratresult ;
  }

}

function pow2(x:number):number{

return x*x;

}

function Impr( param, param2){

  container1.innerHTML = param.split("").join(" ");
  container2.innerHTML = calculate(param).join(" ");
  container3.innerHTML = param2.split("").join(" ");
  container4.innerHTML = calculate(param2.split(""));
}

new Impr( "1234567", "123456789");
