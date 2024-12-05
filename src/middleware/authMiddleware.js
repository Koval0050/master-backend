const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Отримуємо токен з заголовка "Authorization"
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Немає токена, доступ заборонено" });
  }

  try {
    // Декодуємо токен
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Перевіряємо, чи є поле _id в декодованому токені
    if (!decoded.id) {
      return res.status(401).json({ message: "Невірний формат токену" });
    }

    // Додаємо _id користувача в запит
    req.user = decoded;


    // Далі пропускаємо запит
    next();
  } catch (error) {
    res.status(401).json({ message: "Токен недійсний", error: error.message });
  }
};

module.exports = authMiddleware;
