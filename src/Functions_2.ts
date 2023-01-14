import { type } from "os";

let numbers2 = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

//console.log(numbers2);

// Types level
function area(radius: number): number | null {
    if (radius < 0) return null;
    return Math.PI * Math.pow(radius, 2);
};
// Values level
let r: number = 3;
let aa = area(r);
if (aa !== null) console.info('result:', aa);

type Greet = (name: string) => string;
//type Log = (message: string, userId?: string) => void;
type SumVariadicalSafe = (...numbers: number[]) => number;


type Log = (message: string, userId?: string) => void;

let log: Log = (
    message,
    userId = 'Not signed in'
    ) => {
        let time = new Date().toLocaleTimeString();
        console.log(time, message, userId);
    }

    console.log(log('hello', 'user444'));

