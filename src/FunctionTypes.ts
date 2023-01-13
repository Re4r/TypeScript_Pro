// Именованная функция
function add(a: number, b: number) {
    return a + b;
};

console.log(add(5, 5));

// Функциональное выражение
let greet2 = function(name: string) {
    return 'hello ' + name;
};

console.log(greet2('Jack'));

// Выражение стрелочной функции
let greet3 = (name: string) => {
    return 'hello ' + name;
}

console.log(greet3('John'));

// Сокращенное выражение стрелочной функции
let greet4 = (name: string) => 'hello ' + name;

console.log(greet4('Sarah'));

 