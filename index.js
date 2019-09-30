const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '858394254:AAHRP8NOGZOCx6q0czNmJkZsvjtKOtjm-WU'

const bot = TelegramBot(TOKEN, {polling: true})

bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, 'Hello from Heroku, bot says "hi, ${msg.from.first_name}"')
})