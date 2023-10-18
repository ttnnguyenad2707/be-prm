// @ts-ignore
const Post = require('../models/post.model')


class PostService {


    async createOne(req, res) {
        const { } = req.body;
    }
    async updateOne(req, res) {
        const { } = req.body;
    }
    async getDetail(req, res) {
        const { } = req.body;
    }
    async getSearchValue(req, res) {
        const searchParam = req.params.searchParam;
        const currentPage = parseInt(req.params.currentPage);
        const perPage = 5;
    
        try {
            const skip = (currentPage - 1) * perPage;
    
            const result = await Post.find({ title: { $regex: searchParam, $options: 'i' } })
                .skip(skip)
                .limit(perPage) 
                .exec();
    
            if (result.length === 0) {
                return res.status(404).json({ message: "No results found" });
            }
    
            return res.status(200).json({ message: "Search result", data: result });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    
    async getFilterValue({ address, area, price, utils, currentPage }) {
        const query = {};
        const perPage = 5;
        try {
            const skip = (currentPage - 1) * perPage;
    
            if (address) {
                query.address = { $regex: address, $options: 'i' };
            }
            if (area) {
                query.area = { $gte: parseFloat(area) };
            }
            if (price) {
                query.price = { $lte: parseFloat(price) };
            }
            if (utils && utils.length > 0) {
                query.utils = { $all: utils };
            }
            
            const result = await Post.find(query)
                .skip(skip)
                .limit(perPage)
                .exec();
    
            return result;
        } catch (error) {
            // Tạo đối tượng JSON response để báo lỗi
            return { error: error.message };
        }
    }
    
}

module.exports = new PostService();
