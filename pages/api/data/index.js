export default function handler(req, res) {
  console.log("/api/data/root");
  console.log(req);
  res.status(200).json({ "a:": "a" });
}
