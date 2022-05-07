const client = require("../index").client
const { Formatters, MessageEmbed } = require('discord.js');
const db = require("../models/SubscriptionsSchema")
const day = require("dayjs")
const config = require("../JSON/config.json")

client.on('modalSubmit', async (modal) => {
    try {
        if (modal.customId === 'main') {
            const ch = client.channels.cache.get(`${config.client.channelID}`)
            const userid = modal.getTextInputValue('iduser')
            const typee = modal.getTextInputValue('type')
            const appid = modal.getTextInputValue('idapp')
            const exp = modal.getTextInputValue('exp')
            const idOrder = Math.floor(Math.random() * 1000) + 1
            const embed = new MessageEmbed()
                .setTitle("طلب جديد")
                .setColor("WHITE")
                .addFields(
                    { name: `ايدي الطلب`, value: `${idOrder}` },
                    { name: `المشتري`, value: `<@${userid}>` },
                    { name: `نوع البوت`, value: `${typee}` },
                    { name: `البوت`, value: `<@${appid}>` },
                    { name: `المدة`, value: `${exp}` },
                )
                .setThumbnail(modal.guild.iconURL({ dynamic: true }))
                .setAuthor({ name: modal.guild.name, iconURL: modal.guild.iconURL({ dynamic: true }) })
                .setTimestamp()
            const expire = day(exp).valueOf();
            new db({
                ID: idOrder,
                UserID: userid,
                ApplicationID: appid,
                ApplicationType: typee,
                Expire: expire
            }).save().catch(err => {
                console.log(err)
            })
            modal.reply({ content: "تم اضافة طلب جديد" })
            ch.send({ embeds: [embed] })
        }
    } catch (e) {
        console.log(e)
    }
});