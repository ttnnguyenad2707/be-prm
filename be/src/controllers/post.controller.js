const asyncHandler = require('../utils/async-handler');
const PostService = require("../services/post.service");


module.exports = {

    createOne: asyncHandler(async (req, res) => {
        const post = await PostService.createOne(req, res);
    }),
    updateOne: asyncHandler(async (req, res) => {
        const post = await PostService.updateOne(req, res);
    }),
    getPosted: asyncHandler(async (req, res) => {
        const post = await PostService.getPosted(req, res);
    }),
    readPostWithQuantity: asyncHandler(async (req, res) => {
        const post = await PostService.readPostWithQuantity(req, res);
    }),
    deletePost: asyncHandler(async (req, res) => {
        const post = await PostService.deletePost(req, res);
    }),
    loadDeletedPost: asyncHandler(async (req, res) => {
        const post = await PostService.loadDeletedPost(req, res);
    }),
    restorePost: asyncHandler(async (req, res) => {
        const post = await PostService.restorePost(req, res);
    }),
    destroyPostById: asyncHandler(async (req, res) => {
        const post = await PostService.destroyPostById(req, res);
    }),
    getPostedById: asyncHandler(async (req, res) => {
        const post = await PostService.getPostedById(req, res);
    }),
};
