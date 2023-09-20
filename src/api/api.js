import axios from "axios";

const url = "http://127.0.0.localhost:5000/api/v1"; // Replace with your server's URL

export default class API {
    // 1. to get all the posts from the database
    static async getAllPosts() {
        const res = await axios.get(url)
        return res.data
    }
    // 2. to get single post by id from the database
    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`)
        return res.data
    }
    // 3. to insert a new post in the database
    static async addPost(post) {
        const res = await axios.post(url, post)
        return res.data
    }
    // 4. to update a post by id in the database
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data
    }
    // 5. to delete a post by id in the database
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data
    }
}
