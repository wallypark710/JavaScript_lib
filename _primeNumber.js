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
    var cnt = num;
    var param = 1;


    while( cnt >= 0 ) {
	if( isPrime( param ) ) {
	    primeArray.push( param );
	    cnt -= 1;
	}
	
	param += 1;	
    }
    return primeArray.pop();
}
	    
