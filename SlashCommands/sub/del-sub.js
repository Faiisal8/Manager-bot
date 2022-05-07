const { MessageEmbed } = require("discord.js")
const db = require("../../models/SubscriptionsSchema")
const moment = require("moment")

module.exports.run = async (client, inter) => {
    try {
        const idOrder = inter.options.getNumber("order_id")
        if (!idOrder) return inter.reply({ content: `اختر ايدي` })
        let data;
        data = await db.findOne({ ID: idOrder })
        if (!data) return inter.reply({ content: `i can't find order` })
        if (data) {
            await db.deleteOne({ ID: idOrder })
            inter.reply({ content: `Done deleted <@${data.UserID}> Order ID: ${idOrder}  from database` })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.help = {
    name: "del-sub"
}