import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    // Define any additional properties you want to include in the user object
    // For example:
    // firstName: string;
    // lastName: string;
  }
}