import { connectDB, addNew } from "../../../server/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const dbRes = await addNew(req.body);

    if (!dbRes.success) {
      res.statusCode = 500;
      return res.json({ message: dbRes.error });
    }

    res.statusCode = 200;
    res.json({ message: "Contact saved !" });
  }
};

export default connectDB(handler);
