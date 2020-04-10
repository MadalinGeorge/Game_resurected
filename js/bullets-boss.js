class BulletBoss {
    constructor(ctx, width, height, image, bossX, bossY, bossWidth, bossHeight, speed, ) {

        this.ctx = ctx
        this.width = width
        this.height = height

        this.image = new Image()
        this.image.src = image

        this.framesIndex = 0
        this.frames = 1

        this.posX = (bossWidth - 5) / 2 + bossX
        this.posY = bossY - bossHeight
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

        for (let i = 0; i <= 10; i++) {



        }

        this.posY -= this.vY

    }
}