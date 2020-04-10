const blife = {
    ctx: undefined,
    blife: undefined,

    init(ctx, blife) {
        this.ctx = ctx
        this.blife = blife
    },

    draw(blife) {
        this.ctx.fillStyle = "red"
        this.ctx.font = "20px sans-serif"
        this.ctx.fillText("Lucifer life: " + blife, 350, 30)
    }
}