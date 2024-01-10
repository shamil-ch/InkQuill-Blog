"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils"
import bycrpt from "bcrypt"

export const addPost = async (prevState, formData) => {

    //const title = formData.get("title");
    //const desc = formData.get("desc");
    //const slug = formData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(formData)

    //console.log(title, desc, slug, userId);

    try {
        connectToDb();
        const newPost = new Post({
            title, 
            desc, 
            slug, 
            userId,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog")
        revalidatePath("/admin")

    } catch (error) {
        console.log(error);
        return {error: "something went wrong"}
    }
}

export const deletePost = async ( formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog")
        revalidatePath("/admin")

    } catch (error) {
        console.log(error);
        return {error: "something went wrong"}
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }


export const handleLogout = async () => {
    "use server"
    await signOut()
  }

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

    if(password !== passwordRepeat) {
        return {error: "passwords does not match!" }
    }

    try {
        connectToDb();
        const user = await User.findOne({username});
        if(user) {
            return { error: "username already exists" }
        }

        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password, salt)

        const newUser = new User ({
            username, 
            email,
            password: hashedPassword,
            img,
        });
        await newUser.save();
        console.log("saved to db");
        return { success: true }

    } catch (error) {
        console.log(error);
        return {error: "Something went wrong!"};
    }
}


export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password })        
    } catch (err) {
        console.log(err);
     //   if (err.message.includes("CredentialsSignin")) {
            return {error: "Invalid password or username"};
      //  }
       // throw err;
       // return {error: "Something went wrong"}
    }
}

//ADD USER

export const addUser = async (previousState,formData) => {

    const { username,email,password,img } = Object.fromEntries(formData)

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin")
    } catch (error) {
        console.log(error);
        return {error: "something went wrong"}
    }
}

//DELETE USER

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin")
    } catch (error) {
        console.log(error);
        return {error: "something went wrong"}
    }
}
