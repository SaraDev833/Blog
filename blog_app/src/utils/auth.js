import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectToMongoDB } from "../../lib/mongoDB";
import UserModel from "../../models/user/UserSchema";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const { name, email } = user;

      if (account.provider === "google") {
        try {
          // Ensure MongoDB is connected
          await connectToMongoDB();

          // Check if the user already exists in the database
          const userExist = await UserModel.findOne({ email });

          if (!userExist) {
            // If the user doesn't exist, create a new user
            const response = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (response.ok) {
              console.log("User created successfully");
            } else {
              console.log("Failed to create user");
            }
          }

          // Allow the sign-in to proceed (return true if successful)
          return true;

        } catch (error) {
          console.error("Error signing in:", error);
          return false; // Reject sign-in on error
        }
      }

      return true; // Allow sign-in for other providers like GitHub
    },
  },
};
