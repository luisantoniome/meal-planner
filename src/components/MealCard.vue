<template>
  <div class="card">
    <div class="card-content">
      <b-table :data="meal.foods">
        <template slot-scope="props">
          <b-table-column field="food" label="Food">
            <b-autocomplete
              v-model="props.row.food"
              :data="foods"
              field="food_name"
              placeholder="e.g. Pechuga de pollo"
              @typing="getAsyncData"
            ></b-autocomplete>
          </b-table-column>

          <b-table-column field="qty" label="Qty.">
            {{ props.row.qty }}
          </b-table-column>

          <b-table-column field="portion" label="Portion">
            {{ props.row.portion }}
          </b-table-column>

          <b-table-column field="protein" label="Protein (g)">
            {{ props.row.protein }}
          </b-table-column>

          <b-table-column field="carbs" label="Carbs (g)">
            {{ props.row.carbs }}
          </b-table-column>

          <b-table-column field="fat" label="Fat (g)">
            {{ props.row.fat }}
          </b-table-column>

          <b-table-column field="kcal" label="kcal">
            {{ props.row.kcal }}
          </b-table-column>
        </template>
      </b-table>
      <button class="button is-info" @click="addFood()">
        Add food
      </button>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import debounce from "lodash/debounce";

export default {
  props: ["meal"],
  data() {
    return {
      foods: []
    };
  },
  created() {
    // console.log(this.meal.foods);
  },
  methods: {
    addFood() {
      this.meal.foods.push({
        food: "Proteína en polvo",
        kcal: 159
      });
    },
    getAsyncData: debounce(function(query) {
      api.searchFood(query).then(res => {
        this.foods = res;
      });
    }, 500)
  }
};
</script>
