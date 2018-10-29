//Random Function module

var getRandomInt = function( from, end ) {
  return parseInt( Math.random() * ( end - from ) + from );
}

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


//random() 보다 암호학적으로 강력한 수준의 난수 생성.

var typeArr = new Uint32Array(1);
window.crypto.getRandomValues(typeArr);

console.log(typeArr[0]); // 0 ~ 2^32 사이의 난수 생성.
