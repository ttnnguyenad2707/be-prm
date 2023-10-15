// @ts-ignore
const User = require('../models/user.model')

class UserService {

    async updateOne(req, res) {
        try {
            const result= await User.findByIdAndUpdate({_id:req.params.id},{...req.body});
            return res.status(200).json({"message":"Update successfully","data":result});
            
        } catch (error) {
            return res.status(500).json({"error":error.message});
        }
    }
    // get user list (admin page)
    async getUserlist(req,res){
        try {
            const result= await User.find();
            return res.status(201).json({"message":"Update successfully","data":result});
        } catch (error) {
            return res.status(501).json({"error":error.message});
        }
    }
    async updateRole(req,res){
        const Id = req.body;
        try {
            const result= await User.findByIdAndUpdate({_id: Id}, {admin: true});
            return res.status(202).json({"message":"Update successfully","data":result});
        } catch (error) {
            return res.status(502).json({"error":error.message});
        }
    }

}

module.exports = new UserService();
