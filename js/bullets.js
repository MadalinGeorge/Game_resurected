class Bullet {
    constructor(ctx, width, height, image, playerX, playerY, playerWidth, playerHeight, speed, ) {

        this.ctx = ctx
        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = image

        this.framesIndex = 0
        this.frames = 1

        this.posX = (playerWidth - 5) / 2 + playerX
        this.posY = playerY - playerHeight
        this.vY = speed
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width / this.frames),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
    }

    move() {

        this.posY -= this.vY

    }
}