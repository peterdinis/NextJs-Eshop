import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        // Add your custom credentials here
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Implement your own authentication logic here
        // Return user object if authentication succeeds
        // Return null or throw an error if authentication fails
      }
    })
  ],
  pages: {
    signIn: '/login' // Customize the sign-in page URL
  }
});