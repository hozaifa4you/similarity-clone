/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { db } from "@/libs/db";

const google_client_id = process.env.GOOGLE_CLIENT_ID as string;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET as string;

export const authOptions: AuthOptions = {
   adapter: PrismaAdapter(db),
   session: { strategy: "jwt" },
   pages: { signIn: "/login" },
   providers: [
      GoogleProvider({
         clientId: google_client_id,
         clientSecret: google_client_secret,
      }),
   ],
   callbacks: {
      session({ session, token }) {
         if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.picture;
         }
         return session;
      },
      async jwt({ token, user }) {
         const dbUser = await db.user.findFirst({
            where: { email: token.email },
         });

         if (!dbUser) {
            token.id = user!.id;
            return token;
         }

         return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
         };
      },
      redirect() {
         return "/dashboard";
      },
   },
   debug: process.env.NODE_ENV === "development",
};
