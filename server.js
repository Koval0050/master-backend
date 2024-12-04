const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const covidDataRoutes = require("./src/routes/covidDataRoutes");
const user = require('./src/routes/postUser')

dotenv.config(); // Завантажуємо змінні середовища з файлу .env

const app = express();

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
app.use("/api", covidDataRoutes); 
app.use("/api", user); 


// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
