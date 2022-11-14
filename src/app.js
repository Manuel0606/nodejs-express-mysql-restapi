import express from "express";
import morgan from "morgan";

// Routes
import usersRoutes from "./routes/users.routes";

const app = express();

// Setings
app.set("port", process.env.PORT || 3000); //4000

// Middlewars
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);

export default app;