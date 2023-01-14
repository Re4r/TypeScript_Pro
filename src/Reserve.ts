import { type } from "os";

type Reserve = {
    (from: Date, to: Date, destination: string): void
    (from: Date, destination: string): void
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        console.log('Book a one-way trip');
    } else if (typeof toOrDestination === 'string') {
        console.log('Book a round trip');
    }
}



