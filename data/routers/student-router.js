const express = require('express');

const Student = require('../helpers/studentModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const student = await Student.get(req.params.query);
        res.status(200).json(student);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting  the student'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.get(req.params.id);

        if(student){
            res.status(200).json(student);
        }else{
            res.status(404).json({message: 'The Student Was not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error retrieving project'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const student = await Student.insert(req.body);
        console.log(student);
            res.status(201).json(student);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error posting student'
        });
    }
});



module.exports = router;