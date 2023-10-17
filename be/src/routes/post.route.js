const router = require('express').Router();
const PostController=require("../controllers/post.controller")
const {validatePOST,validatePUT}=require('../validations/post.validate');
const {verifyToken}=require("../middlewares/verifyToken.middleware");

router.post('/',verifyToken,validatePOST, PostController.createOne);
router.put('/:id',verifyToken,validatePUT, PostController.updateOne);
router.get('/:id',verifyToken,PostController.getDetail);
router.get('/search/:searchParam', verifyToken, PostController.getSearchValue);
router.post('/filter/', verifyToken, PostController.getFilterValue);

module.exports = router;
