import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import connectDB from "./Configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

// Middleware
app.use(cors({
       origin: "http://localhost:5173", // set to your frontend URL
       credentials: true
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// Connect DB (only once)
connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app