// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { NextAuthOptions} from "next-auth";
// import GitHub from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
// import {prisma} from "@/lib/prisma";

// export const authOptions: NextAuthOptions = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         GitHub({
//             clientId: process.env.GITHUB_CLIENT_ID || "",
//             clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID || "",
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//         }),
//     ]
//     add simple callbacks to store the data when user logs in using prisma
// };
import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
})