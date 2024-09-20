import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;

  email: String;
  password: String;
  phoneNumber: String;
  role: String;
  profile_img: String;
  address: String;
  created_at: Date;
}

const userSchema = new Schema({
  firstname: {
    type: String,
    reqired: [true, "Хэрэглчэгчийн нэрийг зааал оруулна."],
  },
  lastname: {
    type: String,
    reqired: [true, "Хэрэглчэгчийн овгийг  зааал оруулна."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Хэрэглэгчийн имэйл хаягийг заавал оруулна."],
  },
  password: {
    type: String,
    minlength: [8, "Хэрэглэгчийн нууц үг хамгийн багадаа 8 тэмдэгт байна."],
    required: [true, "Хэрэглэгчийн нууц үгийг заавал оруулна."],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default: "",
  },
  address: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);
export default User;
