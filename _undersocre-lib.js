_.first = function(array, n){

    return n === undefined ? array[0] : array.slice(0, n);

};



_.last = function(array, n){
    
    return n === undefined ? array[array.length-1] : ( n === 0 ? [] : array.slice(-n));

};



_.each = function(collection, iterator){

    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        iterator(collection[i], i, collection);
      }
    } else {
      for( let key in collection ){
        iterator(collection[key], key, collection);
      }
    } 
};



_.indexOf = function(array, target){

    for( let i = 0 ; i < array.length; i++ ){
      if( array[i] === target ){
        return i;
      }
    }

    return -1;
};



_.filter = function(collection, test) {
    let result = [];
    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        if( test(collection[i]) ){
          result.push(collection[i]);
        }
      }
    } else {
      for( let key in collection ){
        if( test(collection[key]) ){
          result.push(collection[key]);
        }
      }
    }

    return result;

};



_.reject = function(collection, test) {
    let result = [];

    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        if( !test(collection[i]) ){
          result.push(collection[i]);
        }
      }
    } else {
      for( let key in collection ){
        if( !test(collection[key]) ){
          result.push(collection[key]);
        }
      }
    }

    return result;
    
};



_.uniq = function(array) {
    let result = {};

    for(let i = 0; i < array.length; i++){
	if(!(array[i] in result)){
	    result[array[i]] = array[i];
	}
    }
    return Object.values(result);
};



_.map = function(collection, iterator) {
    let result = [];

    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        result.push( iterator(collection[i]) );
      }
    } else {
      for ( let key in collection ){
        result.push( iterator(collection[key]) );
      }
    }

    return result;

};



_.pluck = function(collection, key) {
    let result = [];

    for( let i = 0; i < collection.length; i++ ){
      result.push(collection[i][key]);
    }

    return result;
   
};



_.reduce = function(collection, iterator, accumulator) {

	if( accumulator === undefined ){
	  accumulator = collection[0];
	  for( let i = 1; i < collection.length; i++){
	    accumulator = iterator(accumulator,collection[i],i);
	  }
	} else {
	  for( let i = 0; i < collection.length; i++){
	    accumulator = iterator(accumulator, collection[i], i);
	  }
	}

	return accumulator;

};



_.contains = function(collection, target) {

    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        if( collection[i] === target ){
          return true;
        }
      }
    } else {
      for( let key in collection ){
        if( collection[key] === target ){
          return true;
        }
      }
    }

    return false;
};



_.every = function(collection, iterator) {

    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        if( iterator === undefined ){
          if( !collection[i] ){
            return false;
          }
        } else {
          if(!iterator(collection[i])){
            return false;
          }
        }
      }
    } else {
      for( let key in collection ){
        if( iterator === undefined ){
          if( !collection[key] ){
            return false;
          }
        } else {
          if( !iterator(collection[key]) ){
            return false;
          }
        }
      }
    }

    return true;
   
};



_.some = function(collection, iterator) {
    if( Array.isArray(collection) ){
      for( let i = 0; i < collection.length; i++ ){
        if( iterator === undefined ){
          if( collection[i] ){
            return true;
          }
        } else {
          if(iterator(collection[i])){
            return true;
          }
        }
      }
    } else {
      for( let key in collection ){
        if( iterator === undefined ){
          if( collection[key] ){
            return true;
          }
        } else {
          if( iterator(collection[key]) ){
            return true;
          }
        }
      }
    }

    return false;
    
};



_.extend = function(obj) {

    let argArr = Object.values(arguments);

    for( let i = 1; i < argArr.length; i++){

      for( let key in argArr[i] ){
        obj[key] = argArr[i][key];
      }

    }

    return obj;

};



_.defaults = function(obj) {
    let argArr = Object.values(arguments);

    for( let i = 1; i < argArr.length ; i++ ){

      for( let key in argArr[i] ){
        if( obj[key] === undefined ){
          obj[key] = argArr[i][key];
        }
      }

    }
    
    return obj;

};



_.memoize = function(func) {
    let cache = {};

    return function(){
      let arg = Object.values(arguments);
      let key = JSON.stringify(arg);

      if( ! (key in cache) ){
        cache[key] = func.apply(this, arg);
      }

      return cache[key];
    }
};



_.delay = function(func, wait) {

    let arg = Object.values(arguments).slice(2);

    setTimeout(()=>{func.apply(this, arg);}, wait);
};



_.shuffle = function(array) {
    let arr = array.slice();

    let idx1;
    let idx2;
    let temp;

    for( let i = 0; i < 100 ; i++ ){
      idx1 = parseInt(Math.random()*arr.length);
      idx2 = parseInt(Math.random()*arr.length);

      temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
    }

    return arr;
 
};



_.invoke = function(collection, functionOrKey, args) {

    let result = [];

    if( typeof functionOrKey === 'string' ){
      for( let i = 0; i < collection.length; i++ ){
        result.push( collection[i][functionOrKey].apply(collection[i]) );
      }
    } else {
      for( let i = 0; i < collection.length; i++ ){
        result.push( functionOrKey.apply(collection[i]) );
      }
    }
    
    return result;

};
