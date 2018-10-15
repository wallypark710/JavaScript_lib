function isPrime(n){
    for( let i = 2; i <= Math.sqrt(n) ; i++ ){
        if( n%i === 0 ){
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    let arr = Array(n+1);
    arr.fill(1);
    
    for( let k = 2; k <= Math.sqrt(n) ; k++ ){
        if( isPrime(k) ){
            for( let i = k*2 ; i <= n; i += k ){
                arr[i] = 0;
            }
        }
    }
 
    answer = arr.reduce( (acc, ele) => (acc+ele), 0) - 2;
    return answer;
}