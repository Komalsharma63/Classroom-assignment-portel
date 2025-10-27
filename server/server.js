import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

const PORT = process.env.PORT || 5000;
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
