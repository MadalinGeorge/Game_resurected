class Boss {
    constructor(ctx, width, height, image, posX, posY, gameWidth, gameHeight) {
        this.ctx = ctx
        this.width = width
        this.height = height

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.image = new Image()
        this.image.src = image

        this.image.framesIndex = 0
        this.image.frames = 8

        this.posX = posX
        this.posY = posY
        this.speed = 4

        this.bullets = []



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
        this.clearBullets()
        this.bullets.forEach(bullet => bullet.draw(framesCounter))
        this.animate(framesCounter)
    }

    move() {

        this.bullets.forEach(bullet => bullet.move())

    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.image.framesIndex++
        }
        if (this.image.framesIndex > this.image.frames - 1) {
            this.image.framesIndex = 0
        }
    }


    shoot() {
        this.bullets.push(
            new Bullet(
                this.ctx,
                22,
                22,
                "./img/atack1.png",
                this.posX,
                this.posY,
                this.width,
                this.height,
                4,
                "player"
            )
        )
    }

    clearBullets() {
        this.bullets = this.bullets.filter(
            bullet => bullet.posY + bullet.height >= this.height
        )
    }
}