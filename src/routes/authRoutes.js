const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const router = express.Router();

// Реєстрація
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Перевірка, чи користувач вже існує
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Користувач вже існує" });
    }

    // Хешування паролю
    const hashedPassword = await bcrypt.hash(password, 10);

    // Створення нового користувача
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    res.status(201).json({ message: "Реєстрація успішна" });
  } catch (error) {
    res.status(500).json({ message: "Помилка сервера", error });
  }
});

// Авторизація
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Перевірка користувача
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Неправильний email або пароль" });
    }

    // Перевірка паролю
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Неправильний email або пароль" });
    }

    // Генерація JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d", // Токен діє 1 день
    });

    // Форматування відповіді з користувачем
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    res.status(200).json({
      message: "Авторизація успішна",
      token,
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({ message: "Помилка сервера", error });
  }
});

module.exports = router;
