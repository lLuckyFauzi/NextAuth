import { hasingPassword } from "../../../helper/auth";
import ConnectToDb from "../../../helper/db";

async function handler(req, res) {
    if(req.method !== 'POST') {
        return
    }

    const data = req.body;
    const {email, password} = data;

    if(!email || !email.includes('@') || !password || password.trim().length < 5) {
        res.status(422).json({
            message: 'Invalid Input'
        })
        return
    }

    const client = await ConnectToDb();
    const db = client.db();    
    const hashPassword = await hasingPassword(password)
    
    const emailValidation = await db.collection('users').findOne({ email: email })
    if(emailValidation) {
        res.status(422).json({message: 'User already exists!'})
        client.close();
        return;
    }

    const results = await db.collection('users').insertOne({
        email: email,
        password: hashPassword
    })

    res.status(201).json({message: 'Created User!', data: results});
}

export default handler;