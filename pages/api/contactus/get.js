import { connectDB, find } from "../../../server/mongodb";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const dbRes = await find();

    if (!dbRes.success) {
      res.statusCode = 500;
      return res.json({ message: dbRes.error });
    }

    res.statusCode = 200;
    res.json({ contacts: dbRes.data });
  }
};

export default connectDB(handler);
