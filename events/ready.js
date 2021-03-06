const client = require("../index").client
const mongoose = require("mongoose")
const config = require("../JSON/config.json")
const { createCmd } = require("../dataHandler");

client.on("ready", async () => {
    function xqs8() {
        let faisal = [""];
        let faisal1 = Math.floor(Math.random() * faisal.length);
        client.user.setActivity(faisal[faisal1]);
    }


    setInterval(xqs8, 5000);
    console.log(`[CLIENT] - Successfully logined as ${client.user.tag} `)

    createCmd(client, "968548654996664331")

    try {
        await mongoose.connect(config.env.DATABASE);
    } catch (e) {
        console.log(e)
    }

});
mongoose.connection.on("connected", () => {
    console.log("[DATABASE] - Connected to database!")
})