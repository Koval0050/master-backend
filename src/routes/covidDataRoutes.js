const express = require("express");
const multer = require("multer"); // Для обробки файлів
const fs = require("fs");
const csvtojson = require("csvtojson");
const router = express.Router();
const CovidData = require("../models/covidDataModel");

// Налаштування multer для збереження файлів у папку uploads
const upload = multer({ dest: "uploads/" });

// POST маршрут для завантаження файлу
router.post("/upload-file", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Файл не завантажено" });
    }

    const filePath = req.file.path; // Шлях до завантаженого файлу

    // Конвертуємо файл (наприклад, CSV у JSON)
    const jsonData = await csvtojson().fromFile(filePath);

    // Зберігаємо кожен запис у базу даних
    const savedData = await CovidData.insertMany(jsonData);

    // Видаляємо тимчасовий файл
    fs.unlinkSync(filePath);

    res.status(201).json({ message: "Дані завантажено успішно", savedData });
  } catch (error) {
    res.status(500).json({ message: "Помилка при завантаженні файлу", error });
  }
});

// GET маршрут для отримання всіх даних з бази
router.get("/covid-data", async (req, res) => {
  try {
    // Отримуємо всі записи з бази даних
    const covidData = await CovidData.find();

    if (!covidData || covidData.length === 0) {
      return res.status(404).json({ message: "Дані не знайдено" });
    }

    res.status(200).json(covidData);
  } catch (error) {
    res.status(500).json({ message: "Помилка при отриманні даних", error });
  }
});

module.exports = router;
