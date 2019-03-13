<template>
  <div class="tile is-child box">
    <p class="title">
      {{ macronutrient.percentage.total }} /
      {{ macronutrient.percentage.needed }} %
    </p>
    <div class="content">
      <p>{{ macronutrient.g.total }} / {{ macronutrient.g.needed }} g</p>
      <p>
        {{ macronutrient.kcal.total }} / {{ macronutrient.kcal.needed }} kcal
      </p>
    </div>
    <p class="subtitle">{{ macronutrient.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["macronutrient"]
};
</script>
