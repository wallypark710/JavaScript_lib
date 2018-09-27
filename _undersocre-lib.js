_.first = function(array, n){

    return n === undefined ? array[0] : array.slice(0, n);

};



_.last = function(array, n){
    
    return n === undefined ? array[array.length-1] : ( n === 0 ? [] : array.slice(-n));

};



_.each = function(collection, iterator){

    if( Array.isArray(collection) ){
      for( var i = 0; i < collection.length; i++ ){
        iterator(collection[i], i, collection);
      }
    } else {
      for( var key in collection ){
        iterator(collection[key], key, collection);
      }
    } 
};



_.indexOf = function(array, target){

    for( var i = 0 ; i < array.length; i++ ){
      if( array[i] === target ){
        return i;
      }
    }

    return -1;
};



_.filter = function(collection, test) {
    var result = [];
    if( Array.isArray(collection) ){
      for( var i = 0; i < collection.length; i++ ){
        if( test(collection[i]) ){
          result.push(collection[i]);
        }
      }
    } else {
      for( var key in collection ){
        if( test(collection[key]) ){
          result.push(collection[key]);
        }
      }
    }

    return result;

};



_.reject = function(collection, test) {
    var result = [];

    if( Array.isArray(collection) ){
      for( var i = 0; i < collection.length; i++ ){
        if( !test(collection[i]) ){
          result.push(collection[i]);
        }
      }
    } else {
      for( var key in collection ){
        if( !test(collection[key]) ){
          result.push(collection[key]);
        }
      }
    }

    return result;
    
};



_.uniq = function(array) {
	var result = [];
	var cnt;

	for( var i = 0; i < array.length; i++ ){
	  cnt = 0;
	  for( var k = 0; k < result.length; k++){
	    if( array[i] === result[k]){
	      cnt = 1;
	      break;
	    }
	  }

	  if( cnt === 1){
	    continue;
	  } else {
	    result.push(array[i]);
	  }
	}

	return result;
   
};



_.map = function(collection, iterator) {
    var result = [];

    if( Array.isArray(collection) ){
      for( var i = 0; i < collection.length; i++ ){
        result.push( iterator(collection[i]) );
      }
    } else {
      for ( var key in collection ){
        result.push( iterator(collection[key]) );
      }
    }

    return result;

};



_.pluck = function(collection, key) {
    var result = [];

    for( var i = 0; i < collection.length; i++ ){
      result.push(collection[i][key]);
    }

    return result;
   
};



_.reduce = function(collection, iterator, accumulator) {

	if( accumulator === undefined ){
	  accumulator = collection[0];
	  for( var i = 1; i < collection.length; i++){
	    accumulator = iterator(accumulator,collection[i],i);
	  }
	} else {
	  for( var i = 0; i < collection.length; i++){
	    accumulator = iterator(accumulator, collection[i], i);
	  }
	}

	return accumulator;

};



_.contains = function(collection, target) {

    if( Array.isArray(collection) ){
      for( var i = 0; i < collection.length; i++ ){
        if( collection[i] === target ){
          return true;
        }
      }
    } else {
      for( var key in collection ){
        if( collection[key] === target ){
          return true;
        }
      }
    }

    return false;
};