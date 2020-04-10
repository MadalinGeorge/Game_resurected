class Enemy {
    constructor(ctx, width, height, image, posX, posY, speed) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = image


        this.image.framesIndex = 0
        this.image.frames = 4

        this.posX = posX
        this.posY = posY

        this.vY = speed


    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
            0,
            Math.floor(this.image.width / this.image.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(framesCounter)

    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
            this.image.framesIndex++
        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0
        }
    }

    move() {
        this.posY >= this.height + 450 || this.posY <= -100 ? this.changeDirection() : null
        this.posY += this.vY

    }

    changeDirection() {
        this.vY *= -1
    }

}