'use strict';
function fib(n){
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }
        n = fib(n - 1) + fib(n - 2);
        return n;
}
    const length = 40;
    for(let i = 0;i <= length;i++){
        console.log(fib(i));
    }
