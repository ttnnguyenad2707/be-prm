// @ts-ignore
const Post = require('../models/post.model')


class PostService {

    
    async createOne(req,res){
        const {}=req.body;
    }
    async updateOne(req,res){
        const {}=req.body;
    }
    async getDetail(req,res){
        const {}=req.body;
        console.log("detail");
        res.send("detail post")
    }
    
}

module.exports = new PostService();
