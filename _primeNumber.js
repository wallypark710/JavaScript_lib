var isPrime = function( num ) {
  for( var i = 2; i < parseInt(num/2)+1 ; i++ ) {
    if( num%i === 0 ){
      return false;
    }
  }
  
  return true;
}
