require('dotenv').config()
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
bot.start(ctx => {
    ctx.reply(
        'Это я'
    )
})

bot.command('cat', ctx => {
    console.log(ctx.message)
    ctx.replyWithPhoto(`https://http.cat/100`)
})

bot.launch()