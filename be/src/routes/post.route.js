const router = require('express').Router();
const PostController=require("../controllers/post.controller")
const {validatePOST,validatePUT}=require('../validations/post.validate');
const {verifyToken}=require("../middlewares/verifyToken.middleware");

router.post('/',verifyToken,validatePOST, PostController.createOne);
router.put('/:id',verifyToken,validatePUT, PostController.createOne);


module.exports = router;
