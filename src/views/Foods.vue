<template>
  <section>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Foods
          </h1>
          <button
            class="button is-info"
            @click="addFoodForm = true"
            v-if="!addFoodForm"
          >
            Add food
          </button>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <section class="section">
        <div class="columns">
          <div class="column is-narrow">
            <b-field label="Brand">
              <b-select @input="filter" v-model="brands.selected">
                <option value="0">
                  All
                </option>
                <option
                  v-for="brand in brands.all"
                  :value="brand.id"
                  :key="brand.id"
                >
                  {{ brand.brand_name }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
            <div class="columns is-multiline">
              <div
                class="column is-narrow"
                v-for="tag in tags.all"
                :key="tag.id"
              >
                <b-checkbox
                  v-model="tags.selected"
                  :native-value="tag.id"
                  @input="filter"
                >
                  {{ tag.tag }}
                </b-checkbox>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container is-fluid">
      <AddFood v-if="addFoodForm" @cancel="addFoodForm = false" />
      <table v-else class="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>food</th>
            <th class="is-size-7">qty.</th>
            <th class="is-size-7">port.</th>
            <th class="has-text-danger">kcal</th>
            <th><abbr title="Protein">protein</abbr></th>
            <th><abbr title="Carbs">carbs</abbr></th>
            <th><abbr title="Fat">fat</abbr></th>
            <th class="is-size-7"><abbr title="Saturated Fat">s fat</abbr></th>
            <th class="is-size-7"><abbr title="Trans Fat">t fat</abbr></th>
            <th class="is-size-7"><abbr title="Mono Fat">m fat</abbr></th>
            <th class="is-size-7"><abbr title="Poly Fat">p fat</abbr></th>
            <th class="has-text-info"><abbr title="Sugar">sugar</abbr></th>
            <th class="is-size-7"><abbr title="Fiber">fiber</abbr></th>
            <th class="is-size-7"><abbr title="Sodium">sodium</abbr></th>
            <th class="is-size-7"><abbr title="Cholesterol">chol</abbr></th>
            <th class="is-size-7"><abbr title="Vitamin B12">v12</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="food in data" :key="food">
            <td width="300">
              <div>{{ food.food }}</div>
              <div class="is-size-7">
                <strong>{{ food.brand }}</strong>
              </div>
              <b-taglist v-if="food.tags.length">
                <b-tag v-for="tag in food.tags" :key="tag" type="is-info">
                  {{ tag }}
                </b-tag>
              </b-taglist>
            </td>
            <td class="is-size-7">{{ food.qty }}</td>
            <td class="is-size-7">{{ food.portion }}</td>
            <td>
              <strong class="has-text-danger">{{ food.kcal }}</strong>
            </td>
            <td>
              <strong>{{ food.protein }}g</strong>
            </td>
            <td>
              <strong>{{ food.carbs }}g</strong>
            </td>
            <td>
              <strong>{{ food.fat }}g</strong>
            </td>
            <td class="is-size-7">
              <div v-if="food.s_fat !== null">{{ food.s_fat }}g</div>
            </td>
            <td class="is-size-7">
              <div v-if="food.t_fat !== null">{{ food.t_fat }}g</div>
            </td>
            <td class="is-size-7">
              <div v-if="food.m_fat !== null">{{ food.m_fat }}g</div>
            </td>
            <td class="is-size-7">
              <div v-if="food.p_fat !== null">{{ food.p_fat }}g</div>
            </td>
            <td>
              <div v-if="food.sugar !== null">
                <strong class="has-text-info">{{ food.sugar }}g</strong>
              </div>
            </td>
            <td class="is-size-7">
              <div v-if="food.fiber !== null">{{ food.fiber }}g</div>
            </td>
            <td class="is-size-7">
              <div v-if="food.sodium !== null">{{ food.sodium }}mg</div>
            </td>
            <td class="is-size-7">
              <div v-if="food.cholesterol !== null">
                {{ food.cholesterol }}mg
              </div>
            </td>
            <td class="is-size-7">
              <div v-if="food.v12">{{ food.v12 }}%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import api from "@/api";
import AddFood from "@/views/AddFood.vue";

export default {
  components: {
    AddFood
  },
  data() {
    return {
      data: [],
      brands: {
        all: [],
        selected: 0
      },
      tags: {
        all: [],
        selected: []
      },
      isLoading: true,
      addFoodForm: false
    };
  },
  created() {
    this.isLoading = true;

    api.foods().then(res => {
      const foods = res.data.response;

      foods.forEach(food => {
        this.data.push({
          food: food.food_name,
          brand: food.brand_name,
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
          cholesterol: food.cholesterol,
          v12: food.vitamin_b12,
          tags: food.tags
        });
      });

      this.isLoading = false;
    });

    api.brands().then(res => {
      res.data.response.forEach(brand => this.brands.all.push(brand));
    });

    api.tags().then(res => {
      res.data.response.forEach(tag => this.tags.all.push(tag));
    });
  },
  methods: {
    filter: function() {
      this.data = [];
      api.filter(this.brands.selected, this.tags.selected).then(res => {
        res.forEach(food => {
          this.data.push({
            food: food.food_name,
            brand: food.brand_name,
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
            cholesterol: food.cholesterol,
            v12: food.vitamin_b12,
            tags: food.tags
          });
        });
      });
    }
  }
};
</script>
