var isPrime = function( num ) {
    for(var i = 2; i < num; i++) {
	if( num%i === 0 ) {
	    return false;
	}
    }

    return true;
}



var primeNumber = function( num ) {
    var primeArray = [];
    var temp = paresInt( Math.sqrt(num) );

    for(var i=0; i <= temp; i++) {
	if( isPrime(i) ) {
	    

	}

    } 
}

