const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
  try {
      const user = await Users.findById(req.params.id);

      if(user){
          res.status(200).json(user);
      }else{
          res.status(404).json({message: 'The User Was not found'})
      }
  } catch (error) {
      console.log(error)
      res.status(500).json({
          message:'Error retrieving User'
      });
  }
});

module.exports = router;