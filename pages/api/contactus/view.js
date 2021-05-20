import fs from "fs";
import { addContact, getContact } from "../../../data";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      addContact();
      res.statusCode = 200;
      return res.json({ message: "Success !" });
    } catch {
      res.statusCode = 500;
      return res.json({ message: "Internal Server Error !" });
    }
  }

  if (req.method === "GET") {
    res.statusCode = 200;
    return res.json({ message: "Success !", count: getContact() });
  }
}
