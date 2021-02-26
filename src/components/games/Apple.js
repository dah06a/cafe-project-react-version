//Helper Functions For Random Canvas Position
const randPos = (val) => Math.floor(Math.random()*(val-10)) + 10;

//Apple Object Class
class Apple {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.size = 8;
        this.color = "rgb(200, 25, 25)";
    }
    display(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
}

let apples = [];
for (let i = 0; i < 5; i++) apples.push(new Apple( randPos(400), randPos(400) ) );

export function displayApples(ctx) {
    for (let i = 0; i < apples.length; i++) apples[i].display(ctx);
}


//Create Multiple Apples
