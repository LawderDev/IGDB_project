import express from "express";
import igdbApi from "../igdb-api-config";
const igdbController = express.Router()

igdbController.get('/', async (request, result) => {
    let config = {
        data:'fields name;'
    }
    result.json((await igdbApi.post('/', config)).data)
})

export default igdbController