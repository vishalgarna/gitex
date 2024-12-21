const express = require('express')
const router = express.Router()
const strategiesController = require('../controllers/Stragegiescontrollers')
const userservices = require('../controllers/userController')
const importantControllers = require('../controllers/importantcontrollers')
// user routes
router.post('/api/create-user', userservices.create);
router.get('/api/all-users', userservices.getalluers)

// strategy routes
router.post('/api/create-strategy', strategiesController.create);
router.get('/api/get-strategy', strategiesController.getstrateies);
router.put('/api/update-strategy', strategiesController.update);
router.delete('/api/delete-strategy/:id', strategiesController.delete);


// important controllers

router.post('/create-important', importantControllers.create);
router.get('/get-importants', importantControllers.getimportant);
router.delete('/delete-important/:id', importantControllers.delete);


module.exports = router