import { type } from "os";

type HasSides = {numberOfSides: number};
type SidesHaveLength = {sideLength: number};

function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
    console.log(s.numberOfSides * s.sideLength);
    return s;
};
