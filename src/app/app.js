var container1 = document.getElementById('container');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
function calculate(x) {
    if (typeof x === "string") {
        // if(x instanceof String){
        //  console.log("entro al if");
        return x.split("").reverse().join(" ");
    }
    if (x instanceof Array) {
        x.forEach(function (element, index, x) {
            x[index] = element * element;
        });
        return x.join(" ");
    }
    //console.log("return calculate");
}
function Impr(param, param2) {
    container1.innerHTML = param.split("").join(" ");
    container2.innerHTML = calculate(param);
    container3.innerHTML = "[ " + param2.join(" ") + " ]";
    container4.innerHTML = "[ " + calculate(param2) + " ]";
}
new Impr("1234567", [1, 2, 3, 4, 5, 6, 7]);
