const client = require("../index").client

client.on("interactionCreate", async inter => {
    if (!inter.guild) return;
    if (inter.isCommand()) {
        let slashCmds = client.SlashCmds.get(inter.commandName)
        if (slashCmds) slashCmds.run(client, inter)
    }
    if (inter.isContextMenu()) {
        let slashCmds = client.SlashCmds.get(inter.commandName)
        if (slashCmds) slashCmds.run(client, inter)
    }
})