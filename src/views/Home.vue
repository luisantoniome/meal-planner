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
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
      <button class="button is-info" @click="addMeal()">
        Add meal
      </button>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
      "fatKcalTotal"
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
    exceeded() {
      return this.totalKcal > this.kcalRequired;
    }
  },
  methods: {
    addMeal() {
      this.meals.push({
        id: 3,
        foods: []
      });
    }
  }
};
</script>
