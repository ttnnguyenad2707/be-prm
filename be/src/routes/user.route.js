const router = require('express').Router();
const UserController=require("../controllers/user.controller")
const {validatePUT}=require('../validations/user.validate');
const {verifyToken}=require("../middlewares/verifyToken.middleware");

router.get('/getlistusers',verifyToken,UserController.getUserlist)
router.put('/:id',verifyToken,validatePUT, UserController.updateOne);

module.exports = router;
