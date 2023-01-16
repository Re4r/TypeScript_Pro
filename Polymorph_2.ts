function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return f(...args);
};

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value);
};

