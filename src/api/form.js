import fetch from "node-fetch";
require('dotenv').config();
export default async function formHandler(req, res){
    if (!req.body.email){
        return res.status(422).json("Email field is required");
    }
    if (!req.body.message){
        return res.status(422).json("Message field is required");
    }
    const makeMessage = (data) => `
    Новое обращение%0A
    Имя: ${data?.name}%0A
    E-mail: ${data?.email}%0A
    Сообщение:%0A
    ${data.message}%0A
    Время отправки: ${new Date().toLocaleDateString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC+3',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })}
    `
    const botResponse = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_ADMIN_ID}&text=${makeMessage(req.body)}`)
    console.log(botResponse)
    return res.status(200).json('OK')
}