public with sharing class FibonacciMemoized {
    
    private List<Integer> memo = new List<Integer>();

    public Integer fib(Integer n)
    {
        if(n<=0){
            return 0;
        }else if(n == 1){
            return 1;
        }else if(memo[n] == 0 || memo[n] == null){
            memo[n] = fib(n-1) + fib(n-2);
        }
        return memo[n];
    }
}
