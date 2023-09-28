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
    


}

module.exports = new UserService();
