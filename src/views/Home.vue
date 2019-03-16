<template>
  <div class="home">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="protein" />
        </div>
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="carbs" />
        </div>
        <div class="tile is-parent">
          <MacronutrientTile :macronutrient="fat" />
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">{{ kcal.total }} / {{ kcal.needed }}</p>
            <p class="subtitle">kcal</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container is-fluid">
      <MealCard v-for="meal in meals" :key="meal.id" :meal="meal" />
      <button class="button is-info" @click="addMeal()">
        Add meal
      </button>
    </section>
  </div>
</template>

<script>
import MacronutrientTile from "@/components/MacronutrientTile.vue";
import MealCard from "@/components/MealCard.vue";

export default {
  name: "home",
  components: {
    MacronutrientTile,
    MealCard
  },
  data() {
    return {
      kcal: {
        total: 700,
        needed: 2300
      },
      protein: {
        name: "Protein",
        percentage: {
          total: 20,
          needed: 40
        },
        g: {
          total: 70,
          needed: 100
        },
        kcal: {
          total: 80,
          needed: 100
        }
      },
      carbs: {
        name: "Carbs",
        percentage: {
          total: 10,
          needed: 20
        },
        g: {
          total: 70,
          needed: 100
        },
        kcal: {
          total: 80,
          needed: 100
        }
      },
      fat: {
        name: "Fat",
        percentage: {
          total: 20,
          needed: 40
        },
        g: {
          total: 70,
          needed: 100
        },
        kcal: {
          total: 80,
          needed: 100
        }
      },
      meals: [
        {
          id: 1,
          foods: [
            {
              food: "Proteína en polvo",
              kcal: 159
            },
            {
              food: "Fresas",
              kcal: 15
            }
          ]
        },
        {
          id: 2,
          foods: [
            {
              food: "Proteína en polvo",
              kcal: 159
            },
            {
              food: "Proteína en polvo",
              kcal: 159
            }
          ]
        }
      ]
    };
  },
  methods: {
    addMeal() {
      this.meals.push({
        id: 3,
        foods: []
      });
    }
  }
};
</script>
