<template>
  <section>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Settings
          </h1>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <section class="section">
        <b-field grouped>
          <b-field label="Weight (kg)">
            <b-input v-model="weight"></b-input>
          </b-field>
          <b-field label="BMR (kcal)">
            <b-input v-model="kcalRequired" :value="kcalRequired"></b-input>
          </b-field>
          <b-field label="Activity">
            <b-select>
            </b-select>
          </b-field>
        </b-field>
        <h2 class="title is-4">Goal</h2>
        <div class="block">
          <b-radio v-model="goal" native-value="0">Fat Loss</b-radio>
          <b-radio v-model="goal" native-value="1">Maintenance</b-radio>
          <b-radio v-model="goal" native-value="2">Muscle Gain</b-radio>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      goal: 0,
      weight: 70
    };
  },
  computed: {
    ...mapState(["kcalRequired"])
  },
  watch: {
    kcalRequired: function(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    ...mapMutations(["setKcalRequired"]),
    updateKcalRequired: function(val) {
      this.setKcalRequired(val);
    }
  }
};
</script>
