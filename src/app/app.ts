

var container = document.getElementById('container');

function Counter(myElement) {
    this.count = 0;

    myElement.innerHTML = this.count;

    myElement.addEventListener('click',
    function () {

        myElement.innerHTML = +(myElement.innerHTML) + 1 ;

    } )
}
new Counter( container );
