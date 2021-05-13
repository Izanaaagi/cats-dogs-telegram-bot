require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true})
const catURI = 'https://aws.random.cat/meow'
const dogURI = 'https://dog.ceo/api/breeds/image/random'


bot.setMyCommands([
    {command: '/start', description: 'Start working with bot'},
    {command: '/cat', description: 'Get random cat'},
    {command: '/dog', description: 'Get random dog'},
])

bot.on('message', async msg => {
    const chatId = msg.chat.id

    if (msg.text === '/cat') {
        axios.get(catURI)
            .then(resp => {
                const photoURI = resp.data.file
                bot.sendPhoto(chatId, photoURI)
            })
    }

    if (msg.text === '/dog') {
        axios.get(dogURI)
            .then(resp => {
                const photoURI = resp.data.message
                bot.sendPhoto(chatId, photoURI)
            })
    }

})