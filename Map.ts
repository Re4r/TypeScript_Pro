function map<A, B>(array: A[], f: (item: A) => B): B[] {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}

console.log(map(['a', 'b', 'c'], _ => _ === 'a'));