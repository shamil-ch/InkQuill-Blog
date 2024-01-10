import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./models";
import { connectToDb } from "./utils";
import bycrpt from "bcrypt"
import { authConfig } from "./authConfig";

const login = async (credentials) => {
    try {
        connectToDb();
        const user = await User.findOne({ username: credentials.username })

        if(!user) {
            throw new Error("No user found")
        }
        const isPasswordCorrect = await bycrpt.compare(credentials.password, user.password);

        if(!isPasswordCorrect) {
            throw new Error("Incorrect password")
        }
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login")
    }
}

export const { 
    handlers: { GET, POST}, 
    auth, 
    signIn, 
    signOut,
 } = NextAuth({ 
    ...authConfig,
    providers: [ 
        GitHub({ 
            clientId: process.env.GITHUB_ID, 
            clientSecret: process.env.GITHUB_SECRET, 
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user;
                } catch (error) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            if(account.provider === "github") {
                connectToDb();
                try {
                    const user = await User.findOne({ email: profile.email });

                    if(!user) {
                        const newUser = new User({ 
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });
                        await newUser.save()
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
       ...authConfig.callbacks,
    }
});