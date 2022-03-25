import express from "express"
import { connect } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import usersController from './controllers/UsersController'
const app = express()

app.use(bodyParser.json())

app.listen(3000, () => console.log("listening at port:3000"))

const uri = "mongodb://127.0.0.1:27017/igdbapp";

connect(uri)
    .then(() => console.log("Connected to Database"))
    .catch(() => "Error connection to database")

app.get('/', async (request, result) => {
    result.json("Home page");
})

const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use('/users', usersController)