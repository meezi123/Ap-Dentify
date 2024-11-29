import NextAuth from "next-auth";
import {MongoClient} from 'mongodb';
import CredentialsProvider from "next-auth/providers/credentials"

const clientPromise = MongoClient.connect(
    "mongodb+srv://l215442:Db94b2BpHpx5NkZW@cluster0.9pf8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials){
                const client = await clientPromise
                const db = client.db()

                const user = await db.collection("Users").findOne({userEmail: credentials.email})
                console.log("User found:", user);

                if(!user){
                    throw new Error("No user found with the provided email.");
                }
                // const isValid = await compare(credentials.password, user.userPassword);

                // if (!isValid) {
                //     throw new Error("Invalid email or password.");
                // }

                return { email: user.userEmail, name: user.userName };
            },
        }),
    ]
})
