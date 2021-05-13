import mongoose from "mongoose";

import Contact from "../mongodb/schema";

export const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export const addNew = async (post) => {
  try {
    const newContact = new Contact(post);

    await newContact.save();

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      error: "Error querying the database",
    };
  }
};

export const find = async () => {
  try {
    const data = await Contact.find().lean();

    return {
      success: true,
      data,
    };
  } catch (err) {
    return {
      success: false,
      error: "Error querying the database",
    };
  }
};
