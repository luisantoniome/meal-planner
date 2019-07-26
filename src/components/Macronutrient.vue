<template>
  <div class="macronutrient">
    <div class="level">
      <div class="level-left">
        <div class="level">
          <p class="is-size-5 has-text-weight-bold">
            {{ macronutrient.name }}
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="is-size-6 has-text-weight-bold">
            {{ macronutrient.percentage.total | roundNumber }} /
            {{ macronutrient.percentage.needed }} %
          </p>
        </div>
      </div>
    </div>
    <progress
      class="progress"
      :class="isExceeded()"
      :value="macronutrient.kcal.total"
      :max="macronutrient.kcal.needed"
    ></progress>
    <div class="level">
      <div class="level-left">
        <div class="level">
          <p class="is-size-7">
            {{ macronutrient.g.total | roundNumber }} /
            {{ macronutrient.g.needed | roundNumber }} g
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="is-size-7">
            {{ macronutrient.kcal.total | roundNumber }} /
            {{ macronutrient.kcal.needed }} kcal
          </p>
        </div>
      </div>
    </div>
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

<style scoped>
.macronutrient {
  margin-bottom: 1rem;
}

.level:not(:last-child),
.progress:not(:last-child) {
  margin-bottom: 0.25rem;
}
</style>
