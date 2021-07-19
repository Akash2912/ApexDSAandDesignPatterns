//get fibonacci number using recursion

function fib(n){

    if(n <= 2){
        return 1;
    }
     return fib(n-1) + fib(n-2);   //adding two numbers
}