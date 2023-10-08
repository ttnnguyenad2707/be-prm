const router = require('express').Router();
const PostController=require("../controllers/post.controller")
const {validatePOST,validatePUT}=require('../validations/post.validate');
const {verifyToken}=require("../middlewares/verifyToken.middleware");

router.post('/',verifyToken,validatePOST, PostController.createOne);
router.put('/:id',verifyToken,validatePUT, PostController.updateOne);
router.get('/getByNumberPost',PostController.readPostWithQuantity);
router.delete('/:id',verifyToken,PostController.deletePost);
router.post('/:id',verifyToken, PostController.restorePost);
router.get('/getdeletedpost',verifyToken,PostController.loadDeletedPost);
router.delete('/destroy/:id',verifyToken,PostController.destroyPostById)



module.exports = router;
