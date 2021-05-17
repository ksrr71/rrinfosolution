import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

const ContactModel = mongoose.model("ContactModel", ContactSchema);

export default ContactModel;
