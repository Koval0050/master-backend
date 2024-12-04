const mongoose = require("mongoose");

const covidDataModel = new mongoose.Schema({
  date: {
    type: Number, // Дата у вигляді числа (20210307)
  },
  state: {
    type: String, // Назва штату (MD)
  },
  positive: {
    type: Number, // Кількість підтверджених випадків
  },
  probableCases: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  negative: {
    type: Number, // Кількість негативних результатів
  },
  pending: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  totalTestResultsSource: {
    type: String, // Джерело результатів тестів (totalTestsViral)
  },
  totalTestResults: {
    type: Number, // Загальна кількість тестів
  },
  hospitalizedCurrently: {
    type: Number, // Кількість госпіталізованих на даний момент
  },
  hospitalizedCumulative: {
    type: Number, // Загальна кількість госпіталізованих
  },
  inIcuCurrently: {
    type: Number, // Кількість людей в реанімації
    default: 0,
  },
  inIcuCumulative: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  onVentilatorCurrently: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  onVentilatorCumulative: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  recovered: {
    type: Number, // Кількість одужавших
  },
  lastUpdateEt: {
    type: String, // Останнє оновлення у форматі "3/7/2021 10:00"
  },
  dateModified: {
    type: String, // Дата модифікації
  },
  checkTimeEt: {
    type: String, // Час перевірки
  },
  death: {
    type: Number, // Кількість смертей
  },
  hospitalized: {
    type: Number, // Кількість госпіталізованих
  },
  hospitalizedDischarged: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  dateChecked: {
    type: String, // Дата перевірки
  },
  totalTestsViral: {
    type: Number, // Загальна кількість вірусних тестів
  },
  positiveTestsViral: {
    type: Number, // Кількість позитивних вірусних тестів
  },
  negativeTestsViral: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  positiveCasesViral: {
    type: Number, // Кількість позитивних випадків вірусних тестів
  },
  deathConfirmed: {
    type: Number, // Кількість підтверджених смертей
  },
  deathProbable: {
    type: Number, // Кількість ймовірних смертей
  },
  totalTestEncountersViral: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  totalTestsPeopleViral: {
    type: Number, // Загальна кількість тестів на людей
  },
  totalTestsAntibody: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  positiveTestsAntibody: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  negativeTestsAntibody: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  totalTestsPeopleAntibody: {
    type: Number, // Загальна кількість тестів на антитіла
  },
  positiveTestsPeopleAntibody: {
    type: Number, // Кількість позитивних тестів на антитіла
  },
  negativeTestsPeopleAntibody: {
    type: Number, // Кількість негативних тестів на антитіла
  },
  totalTestsPeopleAntigen: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  positiveTestsPeopleAntigen: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  totalTestsAntigen: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  positiveTestsAntigen: {
    type: String, // Можливо, порожнє поле
    default: "",
  },
  fips: {
    type: Number, // Код FIPS для штату
  },
  positiveIncrease: {
    type: Number, // Збільшення кількості позитивних випадків
  },
  negativeIncrease: {
    type: Number, // Збільшення кількості негативних результатів
  },
  total: {
    type: Number, // Загальна кількість людей
  },
  totalTestResultsIncrease: {
    type: Number, // Збільшення результатів тестів
  },
  posNeg: {
    type: Number, // Загальна кількість людей для позитивних та негативних тестів
  },
  dataQualityGrade: {
    type: String, // Якість даних (можливо порожнє)
    default: "",
  },
  deathIncrease: {
    type: Number, // Збільшення кількості смертей
  },
  hospitalizedIncrease: {
    type: Number, // Збільшення кількості госпіталізованих
  },
  hash: {
    type: String, // Хеш даних
  },
  commercialScore: {
    type: Number, // Комерційний бал
    default: 0,
  },
  negativeRegularScore: {
    type: Number, // Бал для негативних тестів
    default: 0,
  },
  negativeScore: {
    type: Number, // Бал для негативних тестів
    default: 0,
  },
  positiveScore: {
    type: Number, // Бал для позитивних тестів
    default: 0,
  },
  score: {
    type: Number, // Загальний бал
    default: 0,
  },
  grade: {
    type: String, // Грейт даних (можливо порожнє)
    default: "",
  },
});

module.exports = mongoose.model("CovidData", covidDataModel);
