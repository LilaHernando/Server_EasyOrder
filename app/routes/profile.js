const express = require('express')
const router = express.Router();
const {createProfile} = require('../controllers/profile')

router.post('/', createProfile)














module.exports = router