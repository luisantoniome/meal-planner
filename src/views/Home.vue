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
              {{ kcal.total | roundNumber }} / {{ kcal.needed }}
            </p>
            <p class="subtitle">kcal</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container is-fluid">
      <MealCard
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
        @mealProteinChanged="calculateTotalProtein"
        @mealCarbsChanged="calculateTotalCarbs"
        @mealFatChanged="calculateTotalFat"
        @mealKcalChanged="calculateTotalKcal"
      />
      <button class="button is-info" @click="addMeal()">
        Add meal
      </button>
    </section>
  </div>
</template>

<script>
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
      kcal: {
        total: 0,
        needed: 1852
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
          needed: 834
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
          needed: 139
        },
        kcal: {
          total: 0,
          needed: 556
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
          needed: 463
        }
      },
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
  methods: {
    addMeal() {
      this.meals.push({
        id: 3,
        foods: []
      });
    },
    calculateMacroPercentage(macroKcal) {
      return (macroKcal / this.kcal.total) * 100;
    },
    calculateTotalProtein(protein) {
      const oldVal = protein.oldVal || 0;
      this.protein.g.total = this.protein.g.total - oldVal + protein.newVal;
      this.protein.kcal.total = this.protein.g.total * 4;
    },
    calculateTotalCarbs(carbs) {
      const oldVal = carbs.oldVal || 0;
      this.carbs.g.total = this.carbs.g.total - oldVal + carbs.newVal;
      this.carbs.kcal.total = this.carbs.g.total * 4;
    },
    calculateTotalFat(fat) {
      const oldVal = fat.oldVal || 0;
      this.fat.g.total = this.fat.g.total - oldVal + fat.newVal;
      this.fat.kcal.total = this.fat.g.total * 9;
    },
    calculateTotalKcal(kcal) {
      const oldVal = kcal.oldVal || 0;
      this.kcal.total = this.kcal.total - oldVal + kcal.newVal;
      this.protein.percentage.total = this.calculateMacroPercentage(
        this.protein.kcal.total
      );
      this.carbs.percentage.total = this.calculateMacroPercentage(
        this.carbs.kcal.total
      );
      this.fat.percentage.total = this.calculateMacroPercentage(
        this.fat.kcal.total
      );
    }
  }
};
</script>
