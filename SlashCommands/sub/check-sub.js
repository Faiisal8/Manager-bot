const { MessageEmbed } = require("discord.js")
const db = require("../../models/SubscriptionsSchema")
const moment = require("moment")

module.exports.run = async (client, inter) => {
    try {
        const idOrder = inter.options.getNumber("order_id")
        if (!idOrder) return inter.reply({ content: `اختر ايدي` })
        let data;
        data = await db.findOne({ id: idOrder })
        if (data) {
            let embed = new MessageEmbed()
            // let re = moment(`${Date.now() - data.Expire}`, `YYYYMMDD`).fromNow()
            embed.setTitle(`ID: ${idOrder}`)
            embed.setDescription(`<@${data.UserID}>\nApplication ID: ${data.ApplicationID}\nApplication Type: ${data.ApplicationType}\n${moment(data.Expire).format('MMMM Do YYYY, h:mm:ss a')}`)
            embed.setColor("GREEN")
            embed.setThumbnail(inter.guild.iconURL({ dynamic: true }))
            return inter.reply({ embeds: [embed] })
        } else {
            let embed = new MessageEmbed()
            embed.setDescription(`i can't find order`)
            embed.setColor("RED")
            return inter.reply({ embeds: [embed] })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports.help = {
    name: "check-sub"
}