import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// Temporary data
/*
const users = [
    {id:1, name: 'john'},
    {id:2, name: 'jane'},
]

const posts = [
    {id:1, title: 'post1', body: 'hello world', userId: 1},
    {id:2, title: 'post2', body: 'hello india', userId: 1},
    {id:3, title: 'post3', body: 'hello Brazil', userId: 2},
    {id:4, title: 'post4', body: 'hello America', userId: 2},
]
*/


export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts")
    }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post")
    }}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user")
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users")
    }
}