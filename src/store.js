import Vue from "vue";
import Vuex from "vuex";
import { calculateMacroPercentage } from "./helpers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goal: 0, // 0 fat loss, 1 muscle gain

    kcalRequired: 1800,
    totalKcal: 0,

    proteinPercentageRequired: 40,
    proteinPercentageTotal: 0,
    proteinGramsTotal: 0,
    proteinKcalTotal: 0,

    carbsPercentageRequired: 25,
    carbsPercentageTotal: 0,
    carbsGramsTotal: 0,
    carbsKcalTotal: 0,

    fatPercentageRequired: 35,
    fatPercentageTotal: 0,
    fatGramsTotal: 0,
    fatKcalTotal: 0,

    sugarGramsRequired: 50,
    sugarGramsTotal: 0,

    meals: [
      {
        id: 1,
        foods: [
          {
            id: 0,
            food: "",
            quantity: 0,
            measure: "",
            portion: 0,
            unit: "",
            protein: 0,
            carbs: 0,
            fat: 0,
            kcal: 0
          }
        ]
      }
    ]
  },
  getters: {
    proteinKcalRequired: state => {
      return state.kcalRequired * (state.proteinPercentageRequired / 100);
    },
    proteinGramsRequired: (state, getters) => {
      return getters.proteinKcalRequired / 4;
    },
    carbsKcalRequired: state => {
      return state.kcalRequired * (state.carbsPercentageRequired / 100);
    },
    carbsGramsRequired: (state, getters) => {
      return getters.carbsKcalRequired / 4;
    },
    fatKcalRequired: state => {
      return state.kcalRequired * (state.fatPercentageRequired / 100);
    },
    fatGramsRequired: (state, getters) => {
      return getters.fatKcalRequired / 9;
    }
  },
  mutations: {
    calculateTotalKcal(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.totalKcal = state.totalKcal - oldVal + payload.newVal;
      state.proteinPercentageTotal = calculateMacroPercentage(
        state.proteinKcalTotal,
        state.totalKcal
      );
      state.carbsPercentageTotal = calculateMacroPercentage(
        state.carbsKcalTotal,
        state.totalKcal
      );
      state.fatPercentageTotal = calculateMacroPercentage(
        state.fatKcalTotal,
        state.totalKcal
      );
    },
    calculateTotalProtein(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.proteinGramsTotal =
        state.proteinGramsTotal - oldVal + payload.newVal;
      state.proteinKcalTotal = state.proteinGramsTotal * 4;
    },
    calculateTotalCarbs(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.carbsGramsTotal = state.carbsGramsTotal - oldVal + payload.newVal;
      state.carbsKcalTotal = state.carbsGramsTotal * 4;
    },
    calculateTotalFat(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.fatGramsTotal = state.fatGramsTotal - oldVal + payload.newVal;
      state.fatKcalTotal = state.fatGramsTotal * 9;
    },
    calculateTotalSugar(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.sugarGramsTotal = state.sugarGramsTotal - oldVal + payload.newVal;
    },
    addMeal(state) {
      state.meals.push({
        id: state.meals.length + 1,
        foods: [
          {
            id: 0,
            food: "",
            quantity: 0,
            measure: "",
            portion: 0,
            unit: "",
            protein: 0,
            carbs: 0,
            fat: 0,
            kcal: 0
          }
        ]
      });
    }
  },
  actions: {}
});
