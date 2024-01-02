const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async (req,res) => {
    const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper (async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).send({task})
})

const getTask = asyncWrapper(async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task) {
            return res.status(404).json({message: `no task with id: ${taskID}`})
        }
        res.status(200).json({task})
        res.status(500).json({message:error})
})

const updateTask = asyncWrapper(async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true, runValidators:true,
        });
        if(!task) {
            return res.status(404).json({message: `no task with id: ${taskID}`})
        }
        res.status(200).json({task})
        res.status(500).json({message:error})
})

const deleteTask = asyncWrapper(async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({message: `no task with id: ${taskID}`})
        }
        res.status(200).json({message:'Task successfully deleted!'})
        res.status(500).json({message:error})
})


module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}