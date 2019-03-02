<template>
  <section>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Foods
          </h1>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <b-table :data="data" :columns="columns" default-sort="food"></b-table>
    </div>
  </section>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      data: [],
      columns: [
        { field: "brand", label: "brand" },
        { field: "food", label: "food" },
        { field: "qty", label: "qty." },
        { field: "portion", label: "portion" },
        { field: "kcal", label: "kcal" },
        { field: "protein", label: "protein (g)" },
        { field: "carbs", label: "carbs (g)" },
        { field: "fat", label: "fat (g)" },
        { field: "s_fat", label: "s fat (g)" },
        { field: "t_fat", label: "t fat (g)" },
        { field: "m_fat", label: "m fat (g)" },
        { field: "p_fat", label: "p fat (g)" },
        { field: "sugar", label: "sugar (g)" },
        { field: "fiber", label: "fiber (g)" },
        { field: "sodium", label: "sodium (mg)" },
        { field: "v12", label: "v12" }
      ]
    };
  },
  created() {
    api.foods().then(res => {
      const foods = res.data.response;

      foods.forEach(food => {
        this.data.push({
          brand: food.brand_name,
          food: food.food_name,
          qty: `${food.quantity} ${food.measure}`,
          portion: `${food.portion} ${food.unit}`,
          kcal: food.kcal,
          protein: food.protein,
          carbs: food.carbs,
          fat: food.fat,
          s_fat: food.saturated_fat,
          t_fat: food.trans_fat,
          m_fat: food.mono_fat,
          p_fat: food.poly_fat,
          sugar: food.sugar,
          fiber: food.fiber,
          sodium: food.sodium,
          v12: food.vitamin_b12
        });
      });
    });
  }
};
</script>
