<template>
  <div class="home">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="protein" />
        </div>
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="carbs" />
        </div>
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="fat" />
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">
              {{ sugarGramsTotal | roundNumber }} / {{ sugarGramsRequired }}g
            </p>
            <p class="subtitle">sugar</p>
            <progress
              class="progress"
              :class="isSugarExceeded()"
              :value="sugarGramsTotal"
              :max="sugarGramsRequired"
            ></progress>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">
              {{ totalKcal | roundNumber }} / {{ kcalRequired }}
            </p>
            <p class="subtitle">kcal</p>
            <progress
              class="progress"
              :class="{ 'is-danger': exceeded }"
              :value="totalKcal"
              :max="kcalRequired"
            ></progress>
          </div>
        </div>
      </div>
    </section>
    <section class="container is-fluid">
      <b-field label="Plans">
        <b-select v-model="plans.selected">
          <option value="-1">No plan</option>
          <option v-for="plan in plans.all" :value="plan.id" :key="plan.id">
            {{ plan.id }}
          </option>
        </b-select>
      </b-field>
      <button class="button is-info" @click="loadMealPlan()">
        Load meal plan
      </button>
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
      <button class="button is-info" @click="addMeal()">
        Add meal
      </button>
    </section>
  </div>
</template>

<script>
import api from "@/api";
import { mapState, mapGetters, mapMutations } from "vuex";
import MacronutrientTile from "@/components/MacronutrientTile.vue";
import MealCard from "@/components/MealCard.vue";

export default {
  name: "home",
  components: {
    MacronutrientTile,
    MealCard
  },
  data() {
    return {
      plans: {
        all: [],
        selected: -1
      }
    };
  },
  computed: {
    ...mapState([
      "kcalRequired",
      "totalKcal",
      "proteinPercentageRequired",
      "proteinPercentageTotal",
      "proteinGramsTotal",
      "proteinKcalTotal",
      "carbsPercentageRequired",
      "carbsPercentageTotal",
      "carbsGramsTotal",
      "carbsKcalTotal",
      "fatPercentageRequired",
      "fatPercentageTotal",
      "fatGramsTotal",
      "fatKcalTotal",
      "sugarGramsRequired",
      "sugarGramsTotal",
      "meals"
    ]),
    ...mapGetters([
      "proteinKcalRequired",
      "proteinGramsRequired",
      "carbsKcalRequired",
      "carbsGramsRequired",
      "fatKcalRequired",
      "fatGramsRequired"
    ]),
    protein() {
      return {
        name: "Protein",
        percentage: {
          total: this.proteinPercentageTotal,
          needed: this.proteinPercentageRequired
        },
        g: {
          total: this.proteinGramsTotal,
          needed: this.proteinGramsRequired
        },
        kcal: {
          total: this.proteinKcalTotal,
          needed: this.proteinKcalRequired
        }
      };
    },
    carbs() {
      return {
        name: "Carbs",
        percentage: {
          total: this.carbsPercentageTotal,
          needed: this.carbsPercentageRequired
        },
        g: {
          total: this.carbsGramsTotal,
          needed: this.carbsGramsRequired
        },
        kcal: {
          total: this.carbsKcalTotal,
          needed: this.carbsKcalRequired
        }
      };
    },
    fat() {
      return {
        name: "Fat",
        percentage: {
          total: this.fatPercentageTotal,
          needed: this.fatPercentageRequired
        },
        g: {
          total: this.fatGramsTotal,
          needed: this.fatGramsRequired
        },
        kcal: {
          total: this.fatKcalTotal,
          needed: this.fatKcalRequired
        }
      };
    },
    sugarExceeded() {
      return this.sugarGramsTotal > this.sugarGramsRequired;
    },
    exceeded() {
      return this.totalKcal > this.kcalRequired;
    }
  },
  created() {
    api.plans().then(res => {
      res.data.response.forEach(plan => this.plans.all.push(plan));
    });
  },
  methods: {
    ...mapMutations(["addMeal", "updateMeals"]),
    loadMealPlan() {
      api.planMeals(this.plans.selected).then(res => {
        this.updateMeals(res.data.response);
      });
    },
    isSugarExceeded() {
      return this.sugarExceeded ? "is-danger" : "is-link";
    }
  }
};
</script>
