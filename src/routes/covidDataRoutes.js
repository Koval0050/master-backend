const express = require("express");
const multer = require("multer");
const fs = require("fs");
const csvtojson = require("csvtojson");
const router = express.Router();
const CovidData = require("../models/covidDataModel");

const upload = multer({ dest: "uploads/" });

// POST маршрут для завантаження файлу
router.post(
  "/upload-file",
  upload.single("file"),

  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Файл не завантажено" });
      }

      const filePath = req.file.path;

      const jsonData = await csvtojson().fromFile(filePath);

      console.log("id - ", req.user.id);
      
      const covidDataEntry = new CovidData({
        user: req.user.id,
        fileName: req.file.originalname,
        uploadedAt: new Date(),
        data: jsonData,
      });

      const savedData = await covidDataEntry.save();
      fs.unlinkSync(filePath);

      res.status(201).json({ message: "Дані завантажено успішно", savedData });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Помилка при завантаженні файлу", error });
    }
  }
);

// GET маршрут для отримання даних для авторизованого користувача
router.get("/covid-data", async (req, res) => {
  try {
    const covidData = await CovidData.find({ user: req.user._id });

    if (!covidData || covidData.length === 0) {
      return res.status(404).json({ message: "Дані не знайдено" });
    }

    res.status(200).json(covidData);
  } catch (error) {
    res.status(500).json({ message: "Помилка при отриманні даних", error });
  }
});

// DELETE маршрут для видалення файлу за ID
router.delete("/delete-file/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const dataToDelete = await CovidData.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!dataToDelete) {
      return res
        .status(404)
        .json({ message: "Дані не знайдено або у вас немає доступу до них" });
    }

    const filePath = `uploads/${dataToDelete.fileName}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await CovidData.deleteOne({ _id: id });

    res.status(200).json({ message: "Дані та файл видалено успішно" });
  } catch (error) {
    res.status(500).json({ message: "Помилка при видаленні даних", error });
  }
});

module.exports = router;
