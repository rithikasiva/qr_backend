import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

function randomString(length) {
  return Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
}

app.get("/", (req, res) => {
  const id = randomString(5);
  const url = `https://rithikasiva.github.io/qr_frontend/getin.html?token=${id}`;
  res.json({ url });
});
app.get("/check", (req, res) => {
  if (curToken === req.query.token) {
    console.log("Token matched");
    res.json({ status: "success" });
  } else {
    console.log("Token didn't match");
    res.json({ status: "failure" });

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
