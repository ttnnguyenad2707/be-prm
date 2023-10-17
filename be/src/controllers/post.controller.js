const asyncHandler = require('../utils/async-handler');
const PostService=require("../services/post.service");


module.exports = {

    createOne: asyncHandler(async (req,res)=>{
        const post=await PostService.createOne(req,res);
    }),
    updateOne: asyncHandler(async (req,res)=>{
        const post=await PostService.updateOne(req,res);
    }),
    getDetail: asyncHandler(async(req,res)=>{
        return post=await PostService.getDetail(req,res);
    })
};
