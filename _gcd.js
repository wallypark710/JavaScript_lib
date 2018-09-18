function gcd(num1, num2){
    return num2 ? gcd(num2, num1%num2) : num1;
}
