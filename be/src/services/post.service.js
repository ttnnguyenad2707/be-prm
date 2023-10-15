// @ts-ignore
const Post = require('../models/post.model')
const cloudinary = require('cloudinary').v2;


class PostService {

    
    async createOne(req,res){
        const {category,title,description,address,area,maxPeople,price,deposit,security,utils,interior,images}=req.body;
        try {
            const result = await Post.create({category,title,description,address,area,maxPeople,price,deposit,security,utils,interior,images});
            return res.status(200).json(result)
        } catch (error) {
            res.status(500).json({error: error.toString()})
        }
    }
    // async upload(req,res){
    //     try {
    //         const result = await cloudinary.uploader.upload(req.file.buffer);
    //         res.json(result);
    //     } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ error: 'Something went wrong' });
    //     }
    // }
    

    async updateOne(req,res){
        const {}=req.body;
    }
    async readPostWithQuantity(req,res){
        const quantityOfPost = await req.query.number;
        const result =await Post.find({}).limit(quantityOfPost);
        return res.status(200).json(result);
    }
    async getPosted(req,res){
        const result =await Post.find({deleted: false});
        return res.status(200).json(result);
    }
    async deletePost(req,res){
        const idPost = await req.params.id;
        
        try {
            const result = await Post.findByIdAndUpdate({_id: idPost},{deleted: true,deletedAt: Date.now()});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({Error: error.toString()})
        }
            
        
        
    }

    async loadDeletedPost(req,res){
        try {
            const result = await Post.find({deleted: true});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({Error: error.toString()})
        }  
    }

    async restorePost(req,res){
        const idPost = await req.params.id;
        try {
            const result = await Post.findByIdAndUpdate({_id: idPost},{deleted: false,deletedAt: null});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({Error: error.toString()})
        }  
    }

    async destroyPostById(req,res){
        const idPost = await req.params.id;
        try {
            const result = await Post.findByIdAndDelete({_id: idPost});
            return res.status(200).json({
                message: "Destroy successfully",
                ...result._doc
            });
        } catch (error) {
            return res.status(500).json({Error: error.toString()})
        }  
    }

    async getPostedById(req,res){
        const idPost = await req.params.id;
        try {
            const result = await Post.find({_id: idPost,deleted: false});
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({Error: error.toString()})
        }  
    }
}

module.exports = new PostService();
