const asyncHandler = require('../utils/async-handler');
const UserService=require("../services/user.service");

const getCurrentUser  =  async (req, res)=>{
 
} 
module.exports = {

    updateOne: asyncHandler(async (req,res)=>{
        const user=await UserService.updateOne(req,res);
    }),

   getUserlist: asyncHandler(async (req,res) => {
        const listUsers = await UserService.getUserlist(req,res);
   })

};
