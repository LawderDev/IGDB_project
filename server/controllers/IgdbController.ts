import express from "express";
import igdbApi from "../igdb-api-config";
import dayjs from "dayjs"
const igdbController = express.Router()

igdbController.post('/', async (request, result) => {
    result.json((await igdbApi.post('/', 'fields *;')).data)
})

const mod = (n:number, m:number) => ((n % m) + m) % m

igdbController.post('/mostRatings', async (request, result) => {
    let year = dayjs().get('year')
    let day = '01'
    let mount = mod(dayjs().get('month')-2,12)
    let date = `${year}-${day}-${mount}`
    const requestString = `fields name,rating,cover.url,first_release_date;
                           sort rating desc;
                           where rating != null & first_release_date >= ${dayjs(date).unix()};   
                           limit:${request.body['limit']};`
    result.json((await igdbApi.post('/', requestString)).data)
})

igdbController.post('/lastReleased', async (request, result) => {
    const requestString = `fields name,rating,cover.url,first_release_date;
                           sort rating desc;
                           where first_release_date >= ${dayjs().unix()};   
                           limit:${request.body['limit']};`
    result.json((await igdbApi.post('/', requestString)).data)
})

export default igdbController