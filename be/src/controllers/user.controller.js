const asyncHandler = require('../utils/async-handler');
const UserService=require("../services/user.service");


module.exports = {

    updateOne: asyncHandler(async (req,res)=>{
        const user=await UserService.updateOne(req,res);
    }),

};
