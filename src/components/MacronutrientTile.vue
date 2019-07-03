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
    <progress
      class="progress"
      :class="isExceeded()"
      :value="macronutrient.kcal.total"
      :max="macronutrient.kcal.needed"
    ></progress>
    <p class="subtitle">{{ macronutrient.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["macronutrient"],
  computed: {
    exceeded() {
      return this.macronutrient.kcal.total > this.macronutrient.kcal.needed;
    }
  },
  methods: {
    isExceeded() {
      return this.exceeded ? "is-danger" : "is-primary";
    }
  }
};
</script>
