import { Schema, model } from "mongoose"

const UsersSchema = new Schema({
    name: String,
})

export default model('user', UsersSchema)