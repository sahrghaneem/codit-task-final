const express = require('express');
const UserController=require('../Controller/controller');
const router = express.Router()

router.post('/loginUser',(req,res)=>{
    UserController.getUser(req,res)
}).post('/registerUser',(req,res)=>{
    UserController.registerUser(req,res)
}).delete('/deleteUser',(req,res)=>{
    UserController.deleteUser(req,res)
}).put('/updateUser',(req,res)=>{
    UserController.updateUser(req,res)
}).post('/addUser',(req,res)=>{
    UserController.addUser(req,res)
}).put('/FinishedTask',(req,res)=>{
    UserController.FinishedTask(req,res)
}).put('/TaskInProcess',(req,res)=>{
    UserController.TaskInProcess(req,res)
})
module.exports=router;