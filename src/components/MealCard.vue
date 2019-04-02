<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Measure</th>
                <th>Portion</th>
                <th>Unit</th>
                <th><abbr title="Protein">Prot (g)</abbr></th>
                <th><abbr title="Carbs">Carb (g)</abbr></th>
                <th><abbr title="Fat">Fat (g)</abbr></th>
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
        </div>
        <div class="column is-narrow">
          <div class="box">
            <p>{{ kcal | roundNumber }} kcal</p>
            <p>{{ protein | roundNumber }}g P</p>
            <p>{{ carbs | roundNumber }}g C</p>
            <p>{{ fat | roundNumber }}g F</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <button class="button is-info" @click="addFood()">
          Add food
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
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
      this.$emit("mealProteinChanged", { newVal, oldVal });
    },
    carbs: function(newVal, oldVal) {
      this.$emit("mealCarbsChanged", { newVal, oldVal });
    },
    fat: function(newVal, oldVal) {
      this.$emit("mealFatChanged", { newVal, oldVal });
    },
    kcal: function(newVal, oldVal) {
      this.$emit("mealKcalChanged", { newVal, oldVal });
    }
  },
  created() {
    // console.log(this.meal.foods[0]);
  },
  methods: {
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
