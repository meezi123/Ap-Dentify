import {MongoClient} from 'mongodb';

export default async function handler(req, res) {

  const client = await MongoClient.connect("mongodb+srv://l215442:Db94b2BpHpx5NkZW@cluster0.9pf8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  const db = client.db()

    if(req.method==='POST'){
        
        const name = req.body.n
        const contactNum = req.body.contact
        const DOB = req.body.dob
        const addr = req.body.address
        const gender = req.body.g

      
        const userForm =  await db.collection("UsersProfile").insertOne({ userName: name, contact: contactNum, dateOfBirth: DOB, address: addr, gender: gender})
        if (userForm) {
            res.status(201).json({ message: 'User details entered Successfully' });
          } else {
            res.status(400).json({ message: 'Failed to insert user details' });
          }
    }
    else{

      const {name} = req.query
      console.log("name from context in get api endpoint: ", name);
      const user = await db.collection("UsersProfile").findOne({userName:name})
      console.log("User found:", user);
      res.status(201).json({ messageArr: user })

    }

}
