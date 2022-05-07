const { model, Schema } = require("mongoose")

module.exports = model("Subscriptions", new Schema({
    ID: Number,
    UserID: String,
    ApplicationID: String,
    ApplicationType: String,
    Expire: Number
}))