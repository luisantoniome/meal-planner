import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goal: 0, // 0 fat loss, 1 muscle gain
    kcal: {
      total: 0,
      needed: 1800
    },
    protein: {
      name: "Protein",
      percentage: {
        total: 0,
        needed: 45
      },
      g: {
        total: 0,
        needed: 208
      },
      kcal: {
        total: 0,
        needed: 831
      }
    },
    carbs: {
      name: "Carbs",
      percentage: {
        total: 0,
        needed: 30
      },
      g: {
        total: 0,
        needed: 138
      },
      kcal: {
        total: 0,
        needed: 554
      }
    },
    fat: {
      name: "Fat",
      percentage: {
        total: 0,
        needed: 25
      },
      g: {
        total: 0,
        needed: 51
      },
      kcal: {
        total: 0,
        needed: 462
      }
    }
  },
  getters: {
    protein: {
      g: {
        needed: state => {
          return state.kcal.needed * 0.45;
        }
      }
    }
  },
  mutations: {
    calculateTotalKcal(state, payload) {
      const oldVal = payload.oldVal || 0;
      state.kcal.total = state.kcal.total - oldVal + payload.newVal;
    }
  },
  actions: {}
});
