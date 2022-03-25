import express from "express";
const quoteController = express.Router()
import Quote from '../models/QuotesModel'

quoteController.get('/', async (request, result) => {
    const q = await Quote.find();
    result.json(q);
})

quoteController.post('/upload', async(request, result)=>{
    const newQuote = new Quote(request.body);
    const savedQuote = await newQuote.save()
    result.json(savedQuote)
})

quoteController.get('/:id', async (request, result) => {
    const q = await Quote.findById({ _id: request.params.id });
    result.json(q);
});

quoteController.delete('/delete/:id', async (request, result) => {
    const res = await Quote.findByIdAndDelete({ _id: request.params.id });
    result.json(res);
});

quoteController.patch('/update/:id', async (request, result) => {
    const q = await Quote.updateOne({_id: request.params.id}, {$set: request.body});
    result.json(q);
});

export default quoteController