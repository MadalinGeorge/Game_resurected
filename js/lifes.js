const lifes = {
    ctx: undefined,
    life: undefined,
    img: undefined,

    init(ctx, life) {
        this.ctx = ctx
        this.life = life
    },

    draw(life) {
        this.ctx.fillStyle = "green"
        this.ctx.font = "20px sans-serif"
        this.ctx.fillText("Lifes: " + life, 800, 30)
    }
}