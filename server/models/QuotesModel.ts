import { Schema, model } from "mongoose"

const QuotesSchema = new Schema({
    content: String,
    author: String,
})

export default model('quote', QuotesSchema)