import Vue from "vue";

Vue.filter("roundNumber", number => number.toFixed(0));
