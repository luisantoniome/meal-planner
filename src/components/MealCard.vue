<template>
  <div class="card">
    <div class="card-content">
      <b-table :data="data" :columns="columns">
        <template slot-scope="props">
          <b-table-column field="food" label="Food">
            {{ props.row.food }}
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      columns: [
        { field: "food", label: "food" },
        { field: "qty", label: "qty." },
        { field: "portion", label: "portion" },
        { field: "protein", label: "protein (g)" },
        { field: "carbs", label: "carbs (g)" },
        { field: "fat", label: "fat (g)" },
        { field: "kcal", label: "kcal" }
      ]
    };
  }
};
</script>
