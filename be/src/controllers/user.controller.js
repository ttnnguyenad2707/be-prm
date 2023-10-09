const asyncHandler = require('../utils/async-handler');
const UserService=require("../services/user.service");

const getCurrentUser  =  async (req, res)=>{
 
} 
module.exports = {

    updateOne: asyncHandler(async (req,res)=>{
        const user=await UserService.updateOne(req,res);
    }),

   

};
