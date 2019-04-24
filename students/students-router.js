const router = require('express').Router();

const Students = require('./students-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Students.find()
    .then(students => {
      res.json(students);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
    try {
      const student = await Students.findById(req.params.id);
  
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the Student',
      });
    }
  });

router.post('/', async (req, res) => {
    try {
      const student = await Students.add(req.body);
      res.status(201).json(student);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the student',
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const count = await Students.remove(req.params.id);
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

  router.put('/:id', async (req, res) => {
    try {
      const student = await Students.update(req.params.id, req.body);
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: 'The student could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the student',
      });
    }
  });

module.exports = router;
