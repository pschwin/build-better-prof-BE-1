const express = require('express');
const restricted = require('../../auth/restricted-middleware');
const Reminder = require('../helpers/reminderModel.js');

const router = express.Router();

router.get('/', restricted,  async (req, res) => {
    try {
        const reminder = await Reminder.get(req.params.query);
        res.status(200).json(reminder);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting  the reminder'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const reminder = await Reminder.get(req.params.id);

        if(reminder){
            res.status(200).json(reminder);
        }else{
            res.status(404).json({message: 'The Reminder Was not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error retrieving reminder'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const reminder = await Reminder.insert(req.body);
        console.log(reminder);
            res.status(201).json(reminder);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error posting reminder'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const count = await Reminder.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The reminder has been deleted' });
      } else {
        res.status(404).json({ message: 'The reminder could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the reminder',
      });
    }
  });



module.exports = router;