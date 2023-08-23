import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDatabase } from '@/utils/database';
import User from '@/models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
        const sessionUser = await User.find({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({profile}) {
        try {
            await connectToDatabase();

            // If user exists
            const userExists = await User.findOne({
                email: profile.email
            });

            // If user does not exist, creat new user
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(' ', '').toLowerCase(),
                    image: profile.picture,
                })
            }

            return true;
        } catch (error) {
            console.log('Signin failed')
            return false;
        }
    }
})

export { handler as GET, handler as POST};