let set = new Set;
set.add(1).add(2).add(3);
console.log(set.has(1));
console.log(set.has(4));

class Set1 {
    has(value: number): boolean {};
    add(value: number): this {};
    delete(value: number): boolean {};
} 