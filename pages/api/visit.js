import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      let data = {
        time: Date.now(),
      };
      fs.writeFileSync("./views.txt", "," + JSON.stringify(data), {
        flag: "a+",
      });

      res.statusCode = 200;
      return res.json({ message: "Success !" });
    } catch {
      res.statusCode = 500;
      return res.json({ message: "Internal Server Error !" });
    }
  }

  if (req.method === "GET") {
    let data = fs.readFileSync("./views.txt", "utf8");
    data = data.split(",").map((item) => JSON.parse(item));

    res.statusCode = 200;
    return res.json({ message: "Success !", data, count: data.length });
  }
}
