<template>
  <div class="tile is-child box">
    <p class="title">
      {{ macronutrient.percentage.total | roundNumber }} /
      {{ macronutrient.percentage.needed }} %
    </p>
    <div class="content">
      <p>
        {{ macronutrient.g.total | roundNumber }} /
        {{ macronutrient.g.needed }} g
      </p>
      <p>
        {{ macronutrient.kcal.total | roundNumber }} /
        {{ macronutrient.kcal.needed }} kcal
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
