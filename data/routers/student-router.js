const express = require('express');
const restricted = require('../../auth/restricted-middleware')
const Student = require('../helpers/studentModel.js');

const router = express.Router();

router.get('/', restricted, async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
      const count = await Student.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The student has been deleted' });
      } else {
        res.status(404).json({ message: 'The student could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the student',
      });
    }
  });



module.exports = router;