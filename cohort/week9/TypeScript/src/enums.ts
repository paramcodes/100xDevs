type KeyInput = "UP" | "DOWN" | "LEFT" | "RIGHT";

enum Direction {
    Up,Down,Right,Left
}

function doSomething(keyPressed:Direction){
    console.log(keyPressed);
}

doSomething(Direction.Up);

doSomething(Direction.Down);