const mongoose = require("mongoose");

const covidDataModel = new mongoose.Schema({
  user: { type: String, require: true }, // id користувача що завантажив файл
  fileName: { type: String, required: true }, // Ім'я файлу
  uploadedAt: { type: Date, default: Date.now }, // Час завантаження
  data: [
    {
      date: { type: Number }, // Дата у вигляді числа (20210307)
      state: { type: String }, // Назва штату (MD)
      positive: { type: Number }, // Кількість підтверджених випадків
      probableCases: { type: String, default: "" }, // Можливо, порожнє поле
      negative: { type: Number }, // Кількість негативних результатів
      pending: { type: String, default: "" }, // Можливо, порожнє поле
      totalTestResultsSource: { type: String }, // Джерело результатів тестів
      totalTestResults: { type: Number }, // Загальна кількість тестів
      hospitalizedCurrently: { type: Number }, // Кількість госпіталізованих на даний момент
      hospitalizedCumulative: { type: Number }, // Загальна кількість госпіталізованих
      inIcuCurrently: { type: Number, default: 0 }, // Кількість людей в реанімації
      inIcuCumulative: { type: String, default: "" }, // Можливо, порожнє поле
      onVentilatorCurrently: { type: String, default: "" }, // Можливо, порожнє поле
      onVentilatorCumulative: { type: String, default: "" }, // Можливо, порожнє поле
      recovered: { type: Number }, // Кількість одужавших
      lastUpdateEt: { type: String }, // Останнє оновлення
      dateModified: { type: String }, // Дата модифікації
      checkTimeEt: { type: String }, // Час перевірки
      death: { type: Number }, // Кількість смертей
      hospitalized: { type: Number }, // Кількість госпіталізованих
      hospitalizedDischarged: { type: String, default: "" }, // Можливо, порожнє поле
      dateChecked: { type: String }, // Дата перевірки
      totalTestsViral: { type: Number }, // Загальна кількість вірусних тестів
      positiveTestsViral: { type: Number }, // Кількість позитивних вірусних тестів
      negativeTestsViral: { type: String, default: "" }, // Можливо, порожнє поле
      positiveCasesViral: { type: Number }, // Кількість позитивних випадків вірусних тестів
      deathConfirmed: { type: Number }, // Кількість підтверджених смертей
      deathProbable: { type: Number }, // Кількість ймовірних смертей
      totalTestEncountersViral: { type: String, default: "" }, // Можливо, порожнє поле
      totalTestsPeopleViral: { type: Number }, // Загальна кількість тестів на людей
      totalTestsAntibody: { type: String, default: "" }, // Можливо, порожнє поле
      positiveTestsAntibody: { type: String, default: "" }, // Можливо, порожнє поле
      negativeTestsAntibody: { type: String, default: "" }, // Можливо, порожнє поле
      totalTestsPeopleAntibody: { type: Number }, // Загальна кількість тестів на антитіла
      positiveTestsPeopleAntibody: { type: Number }, // Кількість позитивних тестів на антитіла
      negativeTestsPeopleAntibody: { type: Number }, // Кількість негативних тестів на антитіла
      totalTestsPeopleAntigen: { type: String, default: "" }, // Можливо, порожнє поле
      positiveTestsPeopleAntigen: { type: String, default: "" }, // Можливо, порожнє поле
      totalTestsAntigen: { type: String, default: "" }, // Можливо, порожнє поле
      positiveTestsAntigen: { type: String, default: "" }, // Можливо, порожнє поле
      fips: { type: Number }, // Код FIPS для штату
      positiveIncrease: { type: Number }, // Збільшення кількості позитивних випадків
      negativeIncrease: { type: Number }, // Збільшення кількості негативних результатів
      total: { type: Number }, // Загальна кількість людей
      totalTestResultsIncrease: { type: Number }, // Збільшення результатів тестів
      posNeg: { type: Number }, // Загальна кількість людей для позитивних та негативних тестів
      dataQualityGrade: { type: String, default: "" }, // Якість даних
      deathIncrease: { type: Number }, // Збільшення кількості смертей
      hospitalizedIncrease: { type: Number }, // Збільшення кількості госпіталізованих
      hash: { type: String }, // Хеш даних
      commercialScore: { type: Number, default: 0 }, // Комерційний бал
      negativeRegularScore: { type: Number, default: 0 }, // Бал для негативних тестів
      negativeScore: { type: Number, default: 0 }, // Бал для негативних тестів
      positiveScore: { type: Number, default: 0 }, // Бал для позитивних тестів
      score: { type: Number, default: 0 }, // Загальний бал
      grade: { type: String, default: "" }, // Грейт даних
    },
  ],
});

module.exports = mongoose.model("CovidData", covidDataModel);
