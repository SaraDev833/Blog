import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const UserModel = mongoose.models.UserModel || mongoose.model("UserModel", UserSchema);

export default UserModel;
