import express from "express";
import {httpDate, httpGame} from "../igdb-api-config";
import dayjs from "dayjs"
const igdbController = express.Router()

igdbController.post('/', async (request, result) => {

    const requestString = `fields name,total_rating,cover.url,first_release_date;
                            where name ~ "${request.body['search']}"*;`
    result.json((await httpGame.post('/', requestString)).data)
})

igdbController.post('/games', async (request, result) => {
    console.log("working")
    result.json((await httpGame.post('/', `fields name, genres.name, platforms.name, artworks.url,first_release_date,involved_companies.company.name, summary, total_rating; where id = ${request.body['id']};`)).data)
})

igdbController.post('/mostRatings', async (request, result) => {
    let dateNow = dayjs().subtract(3, 'month')
    const requestString = `fields name,total_rating,cover.url,first_release_date;
                           sort total_rating desc;
                           where total_rating != null & first_release_date >= ${dateNow.unix()};   
                           limit:${request.body['limit']};`
    result.json((await httpGame.post('/', requestString)).data)
})

igdbController.post('/lastReleased', async (request, result) => {
    const requestString = `fields game.name,game.total_rating,game.cover.url,game.status, date;
                           where date <= ${dayjs().unix()} & platform = (6);
                           sort date desc;
                           limit:${request.body['limit']};`
    result.json((await httpDate.post('/', requestString)).data)
})

igdbController.post('/mostHyping', async (request, result) => {
    const requestString = `fields name,rating,hypes,status,cover.url,first_release_date;
                           sort hypes desc;
                           where hypes != null & status > 0 & status <=5;   
                           limit:${request.body['limit']};`
    result.json((await httpGame.post('/', requestString)).data)
})


export default igdbController