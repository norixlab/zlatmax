import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { dbConnect } from "@/utils/database";

const authOptions = {
    pages: {
        signIn: '/login'
    },
    providers: [
        CredentialsProvider({
          
          name: 'Credentials',
         
          credentials: {
            email: { label: "Email", type: "email"},
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            await dbConnect();
            const user = await User.findOne({email: credentials?.email});

            if(!user) throw new Error('Неверный email или пароль');

            if(!credentials?.password) throw new Error('Пожалуйста, укажите свой пароль');

            const isValidPass = await bcrypt.compare(credentials.password, user.password);

            if(!isValidPass) throw new Error('Неверный email или пароль');

            const {password, ...userWithoutPass} = user;

            return userWithoutPass;
          }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ token, session }) {
            session.user = token.user._doc;
            return session;
        },
    },
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }