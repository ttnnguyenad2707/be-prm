const asyncHandler = require('../utils/async-handler');
const PostService = require("../services/post.service");
const { post } = require('../routes/post.route');


module.exports = {

    createOne: asyncHandler(async (req, res) => {
        const post = await PostService.createOne(req, res);
    }),
    updateOne: asyncHandler(async (req, res) => {
        const post = await PostService.updateOne(req, res);
    }),
    getDetail: asyncHandler(async (req, res) => {
        post = await PostService.getDetail(req, res);
    }),
    getSearchValue: asyncHandler(async (req, res) => {
        console.log(req.params.searchParam);
        post = await PostService.getSearchValue(req, res);
    }),
    getFilterValue: asyncHandler(async (req, res) => {
        const { address, area, price, utils } = req.body;
        try {
            const result = await PostService.getFilterValue({ address, area, price, utils });
            return res.status(200).json({ message: "Search result", data: result });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    })
};
