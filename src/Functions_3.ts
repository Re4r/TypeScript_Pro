function times (
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i <= n; i++) {
        f(i)
    }
};

times(n => console.log(n), 10);

// Сокращенная сигнатура вызова
type Log = (message: string, userId?: string) => void;

// Полная сигнатура вызова
type LogFull = {
    (message: string, userId?: string): void
} 

