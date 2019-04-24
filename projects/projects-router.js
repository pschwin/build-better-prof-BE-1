const router = require('express').Router();

const Projects = require('./projects-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
    try {
      const project = await Projects.findById(req.params.id);
  
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the project',
      });
    }
  });

router.post('/', async (req, res) => {
    try {
      const project = await Projects.add(req.body);
      res.status(201).json(project);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the project',
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const count = await Projects.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The project has been deleted' });
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the project',
      });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const project = await Projects.update(req.params.id, req.body);
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'The project could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the project',
      });
    }
  });

module.exports = router;