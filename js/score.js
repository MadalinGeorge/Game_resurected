const score = {
    ctx: undefined,
    score: undefined,

    init(ctx, score) {
        this.ctx = ctx
        this.score = score
    },

    draw(score) {
        this.ctx.fillStyle = "green"
        this.ctx.font = "20px sans-serif"
        this.ctx.fillText("Monsters killed: " + score, 50, 30)
    }
}