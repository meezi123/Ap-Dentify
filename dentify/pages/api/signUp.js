import {MongoClient} from 'mongodb';

export default async function handler(req, res) {

    if(req.method==='POST'){
        const email = req.body.email
        const password = req.body.password


        const client = await MongoClient.connect("mongodb+srv://l215442:Db94b2BpHpx5NkZW@cluster0.9pf8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db()
        //authenticate user afterwards
        await db.collection("Users").insertOne({ userEmail: email, userPassword: password})

        res.status(201).json({message:'Successfully Signed Up'})
    }
    
}
