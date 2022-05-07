async function createCmd(client, guildId) {
    const data = [
        {
            name: "ping",
            description: "reply with pong"
        },
        {
            name: "add-sub",
            description: "add new sub"
        },
        {
            name: "check-sub",
            description: "check user in database",
            options: [
                {
                    name: "order_id",
                    description: "choose id to get information from database",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "del-sub",
            description: "delete sub",
            options: [
                {
                    name: "order_id",
                    description: "choose target to delete from database",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "up-sub",
            description: "update sub",
            options: [
                {
                    name: "target",
                    description: "choose target to update from database",
                    type: "USER",
                    required: true
                },
                {
                    name: "date",
                    description: "choose date to update from database",
                    type: "STRING",
                    required: true
                }
            ]
        },
    ]



    await client.application.commands.set(data);
}


module.exports = { createCmd }