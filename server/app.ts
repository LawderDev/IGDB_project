import express from "express"
import { connect } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import quotesController from './controllers/QuotesController'
const app = express()

app.use(bodyParser.json())

app.listen(3000, () => console.log("listeniing at port:3000"))

const uri = "mongodb://127.0.0.1:27017/Test";

connect(uri)
    .then(() => console.log("Connected to Database"))
    .catch(() => "Error connection to database")


const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use('/quotes', quotesController)