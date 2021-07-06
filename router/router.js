const express = require('express')
const router = express.Router()
const User= require('../model/schema')

router.get('/', (req, res) => {
    res.send("Hello From home Router")
})

// Created a new user
router.post('/add',async (req, res) => {
    const {name,username,email,phone,website}=req.body
    try {
        if (!name || !username || !email || !phone || !website) {
            console.log("Please fill the Form");
            res.status(422).send({message:"Please fill the Form"});
        } else {
            const userData = await User.create(req.body)
        
            if (userData) {
                res.status(200).json({message:"User created Successfully",data:userData});
                console.log(userInput);
            } else {
                console.log("Server Error");
                res.status(422).send({message:"Server Error"});
            }
        }
        
    } catch (err) {
        console.log("User already exist");
        res.status(422).send({message:"User already exist"});
    }
})


// Get or Read a user
router.get('/users/:username', async (req, res) => {
    const { username } = req.params
    const userData =await User.findOne({username:username})
    try {
        if (userData) {
            res.status(200).json({data:userData});
            console.log(userData);
        } else {
            console.log("This username does not exist");
            res.status(422).json({message:`This Username Doesn't Exist.`});
        }
        
    } catch (err) {
        console.log("Catch Error");
        res.status(500).json({message:`Server Error`});
    }
})



// Get or Read all user
router.get('/users', async (req, res) => {
    // const { username } = req.params
    const userData =await User.find()
    try {
            if (userData) {
                res.status(202).json({data:userData});
                // console.log(userData);
            } else {
                console.log("No user found");
                res.status(422).send({message:"No user found"});
            }
        
    } catch (err) {
        console.log("Catch Error");
        res.status(422).send({message:err.messsage});
    }
})


// Update a user
router.patch('/edit/:id', async (req, res) => {
    const {id}=req.params
    const {name,username,email,phone,website}=req.body
    try {
        if (!name && !username && !email && !phone && !website) {
            console.log("Nothing is updated");
            res.status(422).send({message:"Nothing is updated"});
        } else {
            const userData=await User.findOne({username:id})
            if (userData) {
                uerData = await User.findByIdAndUpdate(userData._id, req.body, { new: true })
                console.log(userData);
                
                res.status(200).json({message:"User Updated",data:userData})
            } else {
                console.log(`${id} not found`);
                res.status(422).send({message:`${id} not found`});
            }
        }
        
    } catch (err) {
        console.log("Catch Error");
        res.status(422).send({message:err.messsage});
    }
})



// Delete a user
router.delete('/delete/:id', async (req, res) => {
    const {id}=req.params
    // const {name,username,email,phone,website}=req.body
    try {
        
            let userData=await User.findOne({username:id})
            console.log(userData);
            if (userData) {
                uerData = await User.findByIdAndDelete(userData._id)
                console.log(userData);
                
                res.status(200).json({message:"User Deleted"})
            } else {
                console.log(`${id} not found`);
                res.status(422).send({message:`${id} not found`});
            }
        
    } catch (err) {
        console.log("Catch Error");
        res.status(422).send({message:err.messsage});
    }
})





module.exports=router