const { Client, Collection, Intents } = require("discord.js")
const config = require("./JSON/config.json")
const fs = require("fs")
const discordModals = require('discord-modals')
const client = new Client({

    partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"],
    intents: [
        Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_PRESENCES,
    ],
    allowedMentions: { parse: ["users", "roles"], repliedUser: true }
})
console.clear()



discordModals(client);
module.exports.client = client
client.commands = new Collection();
client.aliases = new Collection();
client.SlashCmds = new Collection();


['command', 'events', 'error'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})
process.on('UnhandledRejection', err => {
    return;
});


// Slash commands handler
fs.readdirSync('./SlashCommands/').forEach(dir => {
    fs.readdir(`./SlashCommands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if (jsFiles.length <= 0) {
            console.log("[SLASH HANDLER] - Can't find any commands!");
            return;
        }

        jsFiles.forEach(file => {
            var fileGet = require(`./SlashCommands/${dir}/${file}`);
            console.log(`[SLASH HANDLER] - File ${file} was loaded`)
            try {
                client.SlashCmds.set(fileGet.help.name, fileGet);
            } catch (err) {
                console.log(err)
            }
        });
    });
});


client.login(config.env.token)