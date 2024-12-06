import { NextResponse } from "next/server";
import { connectToMongoDB } from "../../../../lib/mongoDB";
import UserModel from "../../../../models/user/UserSchema";

export async function POST(request) {
    try {
  
        const { name, email } = await request.json();
        await connectToMongoDB();
        const newUser = await UserModel.create({ name, email });
        console.log("User created:", newUser);
        return NextResponse.json(
            { message: "User created successfully", user: newUser },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error during POST request:", error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
