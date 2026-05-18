import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.get("/response", (req, res) => {
  //   res.send({ message: "Application running" });
  res.status(200).json({ success: true, data: { name: "Pillu" } });
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
