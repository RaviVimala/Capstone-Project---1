

const express = require('express');

const router = express.Router();

const requestController = require ('./Controller/enquiryController');
const usercontroller = require ('../server/Controller/usercontroller');

//Defining Routes

router.get('/movieportal', requestController.getAllEnquiries);

router.get('/movieportal/:id', requestController.getEnquiries);  

router.post('/movieportal',requestController.createEnquiry);

router.post('/user', usercontroller.createUser);


module.exports = router;

