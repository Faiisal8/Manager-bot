const { MessageEmbed } = require("discord.js")
const db = require("../../models/SubscriptionsSchema")
const moment = require("moment")
const day = require("dayjs")

module.exports.run = async (client, inter) => {
    try {
        const target = inter.options.getUser("target")
        const time = inter.options.getString("date")
        if (!target) return inter.reply({ content: `اختر شخص` })
        data = await db.findOne({ UserID: target.id })
        if (data) {
            const Expiree = day(time).valueOf();
            await db.updateOne({ Expire: Expiree })
            inter.reply({ content: `Done updated data` })
        } else {
            let embed = new MessageEmbed()
            embed.setDescription(`Failed to update data`)
            embed.setColor("RED")
            inter.reply({ embeds: [embed] })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.help = {
    name: "up-sub"
}