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
export default {
  data() {
    return {
      data: [
        {
          brand: "",
          food: "Toasted almonds",
          qty: "8 piece (s)",
          portion: "10 g",
          kcal: "61",
          protein: "2.1",
          carbs: "1.8",
          fat: "5.5",
          s_fat: "",
          t_fat: "",
          m_fat: "",
          p_fat: "",
          sugar: "",
          fiber: "",
          sodium: "",
          v12: ""
        },
        {
          brand: "Orgain",
          food: "Organic protein powder - Chocolate",
          qty: "2 scoop (s)",
          portion: "46 g",
          kcal: "152",
          protein: "21",
          carbs: "15",
          fat: "4",
          s_fat: "0.5",
          t_fat: "0",
          m_fat: "2.5",
          p_fat: "1",
          sugar: "0",
          fiber: "7",
          sodium: "200",
          v12: ""
        }
      ],
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
  }
};
</script>
