const game = {
    name: 'Resurected',
    version: 1.0,
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,

    life: 0,
    score: 0,
    blife: 0,

    playerKeys: {
        arrowUp: false,
        arrowRight: false,
        arrowDown: false,
        arrowLeft: false,
        space: false
    },

    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.width = 900
        this.height = 600
        this.canvas.width = this.width + 50
        this.canvas.height = this.height

        this.start()
    },

    start() {
        this.reset()
        this.life = 3
        this.blife = 30
        this.interval = setInterval(() => {
            this.framesCounter++

                this.clear()

            this.drawAll()

            this.moveAll()

            this.generateEnemies()

            this.collisionNormalBullets()

            this.collisionNormalPlayer()

            this.collisionBulletsBoss()



            this.life < 1 ? this.gameOver() : null
            this.framesCounter > 5000 ? this.framesCounter = 0 : null

        }, 1000 / this.fps)
    },



    reset() {
        score.init(this.ctx, this.score)
        blife.init(this.ctx, this.blife)
        lifes.init(this.ctx, this.life)


        this.floor = new Background(this.ctx, this.canvas.width, this.canvas.height, "./img/boss/background3.jpg", 0, 0)

        this.player = new Player(this.ctx, 71, 75, './img/pj/soldier_up.png', this.width / 2, this.height / 2 + 200, this.playerKeys, this.width, this.height)

        this.boss = new Boss(this.ctx, 700, 250, './img/boss/boss.png', this.width / 2 - 350, this.height / 2 - 250, this.width, this.height)

        this.normalEnemy = []




    },



    generateEnemies() {

        if (this.framesCounter % 100 === 0)
            this.normalEnemy.push(new Enemy(this.ctx, 72, 76, "./img/big_demon.png", this.randomEnemy(), 2, 5))

        if (this.score >= 10) {
            if (this.framesCounter % 100 === 0)
                this.normalEnemy.push(new Enemy(this.ctx, 50, 50, "./img/mage-bullet1.png", this.randomEnemy(), 2, 7))

        }


    },



    drawAll() {

        this.floor.draw()
        this.player.draw(this.framesCounter)

        this.score >= 1 ? this.boss.draw(this.framesCounter) : null
        this.normalEnemy.forEach(enemy => enemy.draw(this.framesCounter))
        lifes.draw(this.life)
        score.draw(this.score)
        this.score >= 1 ? blife.draw(this.blife) : null

    },



    moveAll() {

        this.player.move()
        this.normalEnemy.forEach(enemy => enemy.move())

    },



    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },


    gameOver() {
        // document.location.reload();
        setTimeout(() => {
            clearInterval(this.interval);
        }, 500);
        this.image = new Image()
        this.image.src = './img/gameOver.jpg'
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, 351, 618)
        this.ctx.drawImage(this.image, 0, 0, this.width + 50, this.height)

    },




    // colision de balas contra enemigos
    collisionNormalBullets() {
        this.player.bullets.forEach(bullet =>
            this.normalEnemy.forEach(enemy => {
                if (
                    bullet.posY < enemy.posY &&
                    bullet.posX > enemy.posX &&
                    bullet.posX < enemy.posX + enemy.width
                ) {
                    this.score = this.score + 1
                    let index = this.normalEnemy.indexOf(enemy)
                    if (index > -1) {
                        this.normalEnemy.splice(index, 1)
                    }
                    let index2 = this.player.bullets.indexOf(bullet)
                    if (index2 > -1) {
                        this.player.bullets.splice(index2, 1)
                    }
                }
            })
        )
    },

    collisionBulletsBoss() {

        this.player.bullets.forEach(bullet => {

            if (
                bullet.posY < this.boss.posY * this.boss.height &&
                bullet.posX > this.boss.posX &&
                bullet.posX < this.boss.posX + this.boss.width
            ) {
                this.blife--


            }
        })

    },




    // Colision contra jugador y enemigo
    collisionNormalPlayer() {
        this.normalEnemy.forEach(enemy => {
            if (
                this.player.posX < enemy.posX + enemy.width - 25 &&
                this.player.posX + this.player.width - 25 > enemy.posX &&
                this.player.posY < enemy.posY + enemy.height &&
                this.player.height + this.player.posY > enemy.posY
            ) {
                this.life--
                    this.score--

                    let index = this.normalEnemy.indexOf(enemy)

                index > -1 ? this.normalEnemy.splice(index, 1) : null

            }
        })
    },





    randomEnemy() {

        return Math.floor(Math.random() * this.width) + 0

    }



}