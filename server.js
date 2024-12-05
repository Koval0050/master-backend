const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const covidDataRoutes = require("./src/routes/covidDataRoutes");
const authRoutes = require("./src/routes/authRoutes");
const authMiddleware = require("./src/middleware/authMiddleware");

dotenv.config(); // Завантажуємо змінні середовища з файлу .env

const app = express();

app.use(cors());

// Middleware для парсингу JSON
app.use(express.json());

// Підключення до MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Роутери
app.use("/api/auth", authRoutes);
app.use("/api", authMiddleware, covidDataRoutes);

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
