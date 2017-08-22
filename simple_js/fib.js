var fibonacci = (function() {
  var mem = [0, 1];
  var fib = function(n) {
    var result = mem[n];
    if(typeof result !== 'number') {
     result = fib(n-1) + fib(n-2);
     mem[n] = result;
    }
    return result;
  };
  return fib;
}());
console.log(fibonacci(5));