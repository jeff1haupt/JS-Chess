class Board {
    constructor() {
        this.squares = 64;
        this.rows = 8;
    }
}

class Piece {
    constructor(color) {
        this.color = color;
        this.isActive = true;
    }
    isCaptured() {
        this.isActive = false;
    }
}

class Pawn extends Piece {
    constructor(color) {
        super(color)
        this.currentPlacement = 0;
    }
    canMove() {
        // need to figure logic for direction
        // handle blocks 
    }
    attackPossible() {
        //need to figure logic for direction 
    }
}