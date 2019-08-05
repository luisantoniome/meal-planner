<template>
  <div class="card">
    <div class="card-content">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Food</th>
            <th>Qty</th>
            <th></th>
            <th>Port</th>
            <th></th>
            <th><abbr title="Protein">P (g)</abbr></th>
            <th><abbr title="Carbs">C (g)</abbr></th>
            <th><abbr title="Fat">F (g)</abbr></th>
            <th class="has-text-info">
              <abbr title="Sugar">S (g)</abbr>
            </th>
            <th class="has-text-link">
              <abbr title="Sodium">S (mg)</abbr>
            </th>
            <th>kcal</th>
          </tr>
        </thead>
        <tbody>
          <FoodItem
            v-for="food in meal.foods"
            :key="food.id"
            :food="food"
            @foodKcalChanged="calculateMealKcal"
            @foodProteinChanged="calculateMealProtein"
            @foodCarbsChanged="calculateMealCarbs"
            @foodFatChanged="calculateMealFat"
          ></FoodItem>
        </tbody>
      </table>
      <button class="button is-rounded is-info is-small" @click="addFood()">
        <span class="icon is-small">
          <i class="fas fa-plus-circle"></i>
        </span>
      </button>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">{{ protein | roundNumber }}g P</div>
      <div class="card-footer-item">{{ carbs | roundNumber }}g C</div>
      <div class="card-footer-item">{{ fat | roundNumber }}g F</div>
      <div class="card-footer-item has-text-weight-bold">
        {{ kcal | roundNumber }} kcal
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import FoodItem from "@/components/FoodItem.vue";

export default {
  props: ["meal"],
  components: {
    FoodItem
  },
  data() {
    return {
      foods: [],
      protein: 0,
      fat: 0,
      carbs: 0,
      kcal: 0
    };
  },
  watch: {
    protein: function(newVal, oldVal) {
      this.calculateTotalProtein({ newVal, oldVal });
    },
    carbs: function(newVal, oldVal) {
      this.calculateTotalCarbs({ newVal, oldVal });
    },
    fat: function(newVal, oldVal) {
      this.calculateTotalFat({ newVal, oldVal });
    },
    kcal: function(newVal, oldVal) {
      this.calculateTotalKcal({ newVal, oldVal });
    }
  },
  created() {
    // console.log(this.meal.foods[0]);
  },
  methods: {
    ...mapMutations([
      "calculateTotalKcal",
      "calculateTotalProtein",
      "calculateTotalCarbs",
      "calculateTotalFat"
    ]),
    addFood() {
      this.meal.foods.push({
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
      });
    },
    calculateMealKcal(kcal) {
      const oldVal = kcal.oldVal || 0;
      this.kcal = this.kcal - oldVal + kcal.newVal;
    },
    calculateMealProtein(protein) {
      const oldVal = protein.oldVal || 0;
      this.protein = this.protein - oldVal + protein.newVal;
    },
    calculateMealCarbs(carbs) {
      const oldVal = carbs.oldVal || 0;
      this.carbs = this.carbs - oldVal + carbs.newVal;
    },
    calculateMealFat(fat) {
      const oldVal = fat.oldVal || 0;
      this.fat = this.fat - oldVal + fat.newVal;
    }
  }
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
}
</style>
