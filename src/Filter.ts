import { type } from "os";

type Filter = {
    <A>(array: A[], f: (item: A) => boolean): A[];
};

let names = [
    {firstName: 'Beth'},
    {firstName: 'Caitlyn'},
    {firstName: 'Xin'}
];

let filter: Filter = (array, f) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (f(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};



