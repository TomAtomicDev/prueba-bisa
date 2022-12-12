export default function handler(req, res) {
  res.status(200).json({
    header: "Header desde la api",
  });
}
