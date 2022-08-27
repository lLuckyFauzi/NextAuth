import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
import { comparePass } from "../../../helper/auth";
import ConnectToDb  from "../../../helper/db"

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await ConnectToDb();

                const userCollection = client.db().collection('users')
                const user = await userCollection.findOne({email: credentials.email})
                if(!user) {
                    client.close()
                    throw new Error('User Not Found!')
                }

                const isValid = await comparePass(credentials.password, user.password);
                if(!isValid) {
                     client.close()
                    throw new Error('Wrong Password')
                }

                client.close()


                return { message: 'Hello', email: user.email }

            }
        })
    ]
})