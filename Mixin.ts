import { type } from "os";

class User {}

type ClassConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{getDebugValue(): object}>>(Class: C) {
    return class extends Class {
        debug() {
            let Name = Class.constructor.name
            let value = this.getDebugValue()
            return Name + '(' + JSON.stringify(value) + ')'
        }
    }
}

class HardToDebugUser {
    constructor(
        private id: number,
        private firstName: string,
        private lastName: string
    ) {}

    getDebugValue() {
        return {
            id: this.id,
            name: this.firstName + ' ' + this.lastName
        }
    }
}

let User1 = withEZDebug(HardToDebugUser)
let user = new User1(3, 'Emma', 'Gluzman')

console.log(user.debug())



