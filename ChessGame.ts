import { type } from "os";

class Game {};
class Piece {};
class Position {};

class King extends Piece {};
class Queen extends Piece {};
class Bishop extends Piece {};
class Knight extends Piece {};
class Rook extends Piece {};
class Pawn extends Piece {};

type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

