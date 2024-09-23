import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  console.log("URI-IReedui", uri);
  try {
    const con = await mongoose.connect(uri);
    console.log("database connected", con.connection.host);
  } catch (error) {
    console.log("err", error);
    console.log("database cannot connected");
  }
};
