
let hello = function(){
    console.log("hello");
}

let util = {
    repeat : function(fn){
	return function(number){
	    fn();
	    if(number > 1){
		util.repeat(fn)(number-1);
	    }
	}
    }
}
