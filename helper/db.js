import { MongoClient } from 'mongodb'

async function ConnectToDb() {
    const client =  await MongoClient.connect('mongodb+srv://Lynne:lucky123@cluster0.tltsg18.mongodb.net/auth-demo?retryWrites=true&w=majority')

    return client;
}

export default ConnectToDb