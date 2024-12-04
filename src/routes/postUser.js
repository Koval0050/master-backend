const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/user", async (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: "Всі поля повинні бути заповнені" });
  }

  try {
    // Створення нового користувача та збереження в базі даних
    const newUser = new User({ name, email, age });
    await newUser.save();

    console.log("Новий користувач створений:", newUser);

    res.status(201).json({
      message: "Користувач успішно створений",
      user: newUser,
    });
  } catch (error) {
    console.error("Помилка збереження користувача:", error);
    res.status(500).json({ message: "Не вдалося створити користувача" });
  }
});

module.exports = router;
