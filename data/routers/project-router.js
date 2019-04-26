const express = require('express');

const Project = require('../helpers/projectModel.js');
const restricted = require('../../auth/restricted-middleware');
const router = express.Router();

router.get('/', restricted, async (req, res) => {
    try {
        const project = await Project.get(req.params.query);
        res.status(200).json(project);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error retrieving project'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.get(req.params.id);

        if(project){
            res.status(200).json(project);
        }else{
            res.status(404).json({message: 'The Project Was not found'})
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
        const project = await Project.insert(req.body);
        console.log(project);
            res.status(201).json(project);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error adding the project'
        });
    }
});



module.exports = router;