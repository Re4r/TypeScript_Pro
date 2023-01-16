function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
    return f(...args);
};

