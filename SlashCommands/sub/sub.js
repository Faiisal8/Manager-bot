const { Modal, TextInputComponent, showModal } = require("discord-modals")

module.exports.run = async (client, inter) => {
    const modal = new Modal()
        .setCustomId('main')
        .setTitle('اضافة طلب جديد')
        .addComponents(
            new TextInputComponent()
                .setCustomId('iduser')
                .setLabel('ايدي المشتري')
                .setStyle('SHORT')
                .setMinLength(18)
                .setMaxLength(18)
                .setPlaceholder('ايدي المشتري')
                .setRequired(true),

            new TextInputComponent()
                .setCustomId('type')
                .setLabel('السلعة')
                .setStyle('SHORT')
                .setMinLength(1)
                .setMaxLength(50)
                .setPlaceholder('اختر سلعة المشتري')
                .setRequired(true),

            new TextInputComponent()
                .setCustomId('idapp')
                .setLabel('ايدي البوت')
                .setStyle('SHORT')
                .setMinLength(18)
                .setMaxLength(18)
                .setPlaceholder('ايدي البوت')
                .setRequired(true),

            new TextInputComponent()
                .setCustomId('exp')
                .setLabel('تاريخ الانتهاء')
                .setStyle('SHORT')
                .setMinLength(10)
                .setMaxLength(10)
                .setPlaceholder('YYYY-MM-DD')
                .setRequired(true),


        )
    showModal(modal, {
        client: client,
        interaction: inter
    })
}

module.exports.help = {
    name: "add-sub"
}