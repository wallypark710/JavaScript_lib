var shuffle = function(array) {

    var newArray = array.slice();

    var idx1;
    var idx2;
    var temp;

    for( var i = 0; i < 100; i++) {
      idx1 = parseInt(Math.random()*(newArray.length)); 
      idx2 = parseInt(Math.random()*(newArray.length));   

      temp = newArray[idx1];
      newArray[idx1] = newArray[idx2];
      newArray[idx2] = temp;
  
    }

    return newArray; 
  };