import { type } from "os";

class User {}

type ClassConstructor = new(...args: any[]) => {}

function withEZDebug<C extends ClassConstructor>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }
    }
}