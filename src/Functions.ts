function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
};

console.log(log('Page loaded'));
console.log(log('User signed in', 'da763be'));

function log2(message: string, userId = 'Not signed in') {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};

console.log(log2('User clicked on a button', 'da763be'));
console.log(log2('User signed out'));

/*type Context = {
    appId?: string,
    userId?: string
};*/

/*function log3(message: string, context: Context = {}) {
    let time = new Date().toLocaleDateString();
    console.log(time, message, context.userId);
};*/

//console.log(log3('User clicked on a button', 'da76dd3be' ));
//console.log(log3('User signed out', 'da763be'));

function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
};

console.log(sum([1, 2, 3]));

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
};

console.log(sumVariadicSafe(1, 2, 3, 4));









