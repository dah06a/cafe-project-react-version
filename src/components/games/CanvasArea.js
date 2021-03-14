import React, { useEffect, useRef } from 'react';

const CanvasArea = (props) => {

    //Global Variables
    const canvasRef = useRef(null);
    const w = props.width;
    const h = props.height;
    const gameSize = 7;
    const randPos = (val) => Math.floor(Math.random()*(val-10)) + 10;

    let gameSpeed = 1;
    let score = 0;
    let gameOver = true;
    let currentKey = 'a';
    document.addEventListener("keydown", e => {
        e.preventDefault();
        currentKey = e.key;
    });

    class Apple {
        constructor(posX, posY) {
            this.posX = posX;
            this.posY = posY;
            this.size = gameSize - 2;
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
    for (let i = 0; i < 5; i++) apples.push(new Apple( randPos(w), randPos(h) ) );

    class Snake {
        constructor(headX, headY) {
            this.headX = headX;
            this.headY = headY;
            this.bodX = [];
            this.bodY = [];
            this.bodLen = gameSize*15;
            this.bodSize = gameSize;
            this.color = "rgb(25, 100, 25)";
            this.goingUp = false;
            this.goingDown = false;
            this.goingLeft = false;
            this.goingRight = true;
        }
        display(ctx) {
            ctx.fillStyle = this.color;
            for (let i = 0; i < this.bodX.length; i++) {
                ctx.beginPath();
                ctx.arc(this.bodX[i], this.bodY[i], this.bodSize, 0, 2*Math.PI);
                ctx.fill();
            }
        }
        update(currentKey) {
            //Move snake in the direction it is already going
            if (this.goingUp) this.headY -= gameSpeed;
            if (this.goingDown) this.headY += gameSpeed;
            if (this.goingLeft) this.headX -= gameSpeed;
            if (this.goingRight) this.headX += gameSpeed;

            //Add the new coordinates to the snake body
            this.bodX.push(this.headX);
            this.bodY.push(this.headY);

            //Remove body coordinates to keep snake the right length;
            if (this.bodX.length > this.bodLen) {
                this.bodX.shift();
                this.bodY.shift();
            }

            //Player controls
            if (currentKey === "ArrowUp" && !this.goingDown) {
                this.goingUp = true;
                this.goingLeft = false;
                this.goingRight = false;
            }

            if (currentKey === "ArrowDown" && !this.goingUp) {
                this.goingDown = true;
                this.goingLeft = false;
                this.goingRight = false;
            }
            if (currentKey === "ArrowLeft" && !this.goingRight) {
                this.goingLeft = true;
                this.goingUp = false;
                this.goingDown = false;
            }
            if (currentKey === "ArrowRight" && !this.goingLeft) {
                this.goingRight = true;
                this.goingUp = false;
                this.goingDown = false;
            }
        }
        checkCollisions() {
            Snake.prototype.checkCollisions = function() {

                //Check for walls/border of canvas
                if (this.headY <= this.bodSize || this.headY >= h-this.bodSize || this.headX <= this.bodSize || this.headX >= w-this.bodSize) {
                    gameOver = true;
                }

                //Check for collisions with snake body starting from "neck" all the way until end of tail
                for (let i = this.bodX.length-(this.bodSize*2); i > 0; i--) {
                    if (Math.abs(this.headX - this.bodX[i]) < this.bodSize && Math.abs(this.headY - this.bodY[i]) < this.bodSize) {
                        gameOver = true;
                    }
                }

                //Check for apple collisions - increase snake length and game speed
                for (let i = 0; i < apples.length; i++) {
                    if (Math.abs(this.headX - apples[i].posX) < this.bodSize && Math.abs(this.headY - apples[i].posY) < this.bodSize) {
                        apples[i].posX = randPos(w);
                        apples[i].posY = randPos(h);
                        this.bodLen += gameSize*5;
                        gameSpeed += (gameSpeed/30);
                        score += 1000;
                    }
                }
            }
        }
    }
    const snake = new Snake(w/2, h/2);

    function showGameOver(ctx) {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "24px sans-serif";
        ctx.fillText("Game Over", w/2, h/2);
        ctx.font = "18px serif";
        ctx.fillText("Press Spacebar To Play", w/2, h/1.7);
        ctx.fillText("Score: " + score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), w/2, h/1.5);
        if (currentKey === ' ') resetGame(ctx);
    }

    function resetGame(ctx) {
        ctx.clearRect(0, 0, w, h);
        gameOver = false;
        gameSpeed = 1;
        score = 0;
        currentKey = 'a';

        apples = [];
        for (let i = 0; i < 5; i++) apples.push(new Apple( randPos(w), randPos(h) ) );

        snake.headX = w/2;
        snake.headY = h/2;
        snake.bodX = [];
        snake.bodY = [];
        snake.bodLen = gameSize*15;
        snake.goingUp = false;
        snake.goingDown = false;
        snake.goingLeft = false;
        snake.goingRight = true;
    }

    function playGame(ctx) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < apples.length; i++) apples[i].display(ctx);
        snake.display(ctx);
        snake.update(currentKey);
        snake.checkCollisions();
        score++;

        if (currentKey === ' ') gameOver = true;
    }

    useEffect(() => {
        const draw = () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (gameOver) showGameOver(ctx);
            else playGame(ctx);
            requestAnimationFrame(draw);
        };
        draw();
    }, []);

    return <canvas
        ref={canvasRef}
        height={props.height}
        width={props.width}
        style={{backgroundColor: 'var(--theme-dark)'}}
    />
}

export default CanvasArea;
