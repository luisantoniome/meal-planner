<template>
  <div class="card">
    <div class="card-content">
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
          ></FoodItem>
        </tbody>
      </table>
      <button class="button is-info" @click="addFood()">
        Add food
      </button>
    </div>
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
      foods: []
    };
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
    }
  }
};
</script>
