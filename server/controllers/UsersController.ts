import express from "express";
const usersController = express.Router()
import User from '../models/UsersModel'

usersController.get('/', async (request, result) => {
    const q = await User.find();
    result.json(q);
})

usersController.post('/upload', async(request, result)=>{
    const newUser = new User(request.body);
    const savedUSer = await newUser.save()
    result.json(savedUSer)
})

usersController.get('/:id', async (request, result) => {
    const q = await User.findById({ _id: request.params.id });
    result.json(q);
});

usersController.delete('/delete/:id', async (request, result) => {
    const res = await User.findByIdAndDelete({ _id: request.params.id });
    result.json(res);
});

usersController.patch('/update/:id', async (request, result) => {
    const q = await User.updateOne({_id: request.params.id}, {$set: request.body});
    result.json(q);
});

export default usersController