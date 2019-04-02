<template>
  <tr>
    <td width="400">
      <b-autocomplete
        v-model="food.food"
        :data="foods"
        field="food_name"
        placeholder="e.g. Pechuga de pollo"
        @typing="getAsyncData"
        @select="setSelectedFood"
      ></b-autocomplete>
    </td>
    <td width="10">
      <b-field>
        <b-input v-model="food.quantity"></b-input>
      </b-field>
    </td>
    <td>{{ food.measure }}</td>
    <td width="10">
      <b-field>
        <b-input v-model="input.portion"></b-input>
      </b-field>
    </td>
    <td>{{ food.unit }}</td>
    <td>{{ protein | roundNumber }}</td>
    <td>{{ carbs | roundNumber }}</td>
    <td>{{ fat | roundNumber }}</td>
    <td>{{ kcal | roundNumber }}</td>
  </tr>
</template>

<script>
import api from "@/api";
import debounce from "lodash/debounce";

export default {
  props: ["food"],
  data() {
    return {
      input: {
        portion: 0
      },
      basePortion: 0,
      foods: []
    };
  },
  computed: {
    protein() {
      return this.calculate(this.food.protein);
    },
    carbs() {
      return this.calculate(this.food.carbs);
    },
    fat() {
      return this.calculate(this.food.fat);
    },
    kcal() {
      return this.calculate(this.food.kcal);
    }
  },
  watch: {
    "food.quantity": function(val) {
      this.input.portion = val * this.basePortion;
    },
    "food.portion": function(val) {
      this.input.portion = val;
    },
    protein: function(newVal, oldVal) {
      this.$emit("foodProteinChanged", { newVal, oldVal });
    },
    carbs: function(newVal, oldVal) {
      this.$emit("foodCarbsChanged", { newVal, oldVal });
    },
    fat: function(newVal, oldVal) {
      this.$emit("foodFatChanged", { newVal, oldVal });
    },
    kcal: function(newVal, oldVal) {
      this.$emit("foodKcalChanged", { newVal, oldVal });
    }
  },
  created() {
    this.input.portion = this.food.portion;
    this.setBasePortion();
  },
  methods: {
    calculate(property) {
      return (this.input.portion * property) / this.food.portion;
    },
    getAsyncData: debounce(function(query) {
      api.searchFood(query).then(res => {
        res.forEach(item => {
          if (item.brand_name) {
            item.food_name = `(${item.brand_name}) ${item.food_name}`;
          }
        });
        this.foods = res;
      });
    }, 500),
    setSelectedFood(food) {
      if (food) {
        this.food.brand = food.brand_name;
        this.food.quantity = food.quantity;
        this.food.measure = food.measure;
        this.input.portion = food.portion;
        this.food.portion = food.portion;
        this.food.unit = food.unit;
        this.food.protein = food.protein;
        this.food.fat = food.fat;
        this.food.carbs = food.carbs;
        this.food.kcal = food.kcal;
        this.setBasePortion();
      }
    },
    setBasePortion() {
      this.basePortion = this.food.portion / this.food.quantity;
    }
  }
};
</script>
