let numbers2 = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

//console.log(numbers2);

function area(radius: number): number | null {
    if (radius < 0) return null;
    return Math.PI * Math.pow(radius, 2);
};

let r: number = 3;
let aa = area(r);
if (aa !== null) console.info('result:', aa);



