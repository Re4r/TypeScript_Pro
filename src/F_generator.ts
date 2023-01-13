function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
};

let fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());

function* createNumbers() {
    let n = 0;
    while (true) {
        yield n++;
    }
};

let numbers = createNumbers();

console.log(numbers.next());
