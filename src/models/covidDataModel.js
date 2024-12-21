const mongoose = require("mongoose");

const IDataSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  state: { type: String, required: true },
  positive: { type: Number },
  negative: { type: Number },
  totalTestResults: { type: Number },
  hospitalizedCurrently: { type: Number },
  recovered: { type: Number },
  death: { type: Number },
});

const CovidDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fileName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  data: [IDataSchema], // Вказуємо, що `data` має відповідати лише цьому схемі
});

module.exports = mongoose.model("CovidData", CovidDataSchema);
