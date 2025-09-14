import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

dotenv.config();
const app = express();

// ✅ Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "https://car-rental-cli.onrender.com", // deployed frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Car Rental Backend is running "));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// Connect DB + Start Server
connectDB();

const PORT = process.env.PORT || 5000; // 👈 5000 rakho, 3000 React ke sath clash karta hai
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
