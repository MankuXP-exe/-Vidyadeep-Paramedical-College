import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Vidyadeep Admin Login",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@vidyadeepcollege.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // This is a simple authentication logic for the demo.
                // In production, we would query the database and use bcrypt to check password hash.
                const adminEmail = process.env.ADMIN_EMAIL || "admin@vidyadeepcollege.com"
                const adminPassword = process.env.ADMIN_PASSWORD || "admin_secure_password_123"

                if (credentials?.email === adminEmail && credentials?.password === adminPassword) {
                    return { id: "1", name: "Administrator", email: adminEmail, role: "admin" }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET || "vidyadeep-college-super-secret-key-12345",
})

export { handler as GET, handler as POST }
