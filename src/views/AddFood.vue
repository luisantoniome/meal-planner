<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Brand Name</label>
          <div class="control">
            <input type="text" class="input" placeholder="Orgain" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Food Name</label>
          <div class="control">
            <input type="text" class="input" placeholder="Proteína en polvo" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Quantity</label>
          <div class="control">
            <input type="text" class="input" placeholder="1" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Measure</label>
          <div class="control">
            <input type="text" class="input" placeholder="taza (s)" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Portion</label>
          <div class="control">
            <input type="text" class="input" placeholder="100" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Unit</label>
          <div class="control">
            <input type="text" class="input" placeholder="g" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">kcal</label>
          <div class="control">
            <input type="text" class="input" placeholder="159.2" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Protein (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="21" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Carbs (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="9.8" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Fat (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="4" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Saturated Fat (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="1" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Trans Fat (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="0" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Mono Fat (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="1" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Poly Fat (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="1" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Sugar (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="0" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Fiber (g)</label>
          <div class="control">
            <input type="text" class="input" placeholder="10" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Sodium (mg)</label>
          <div class="control">
            <input type="text" class="input" placeholder="50" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Cholesterol (mg)</label>
          <div class="control">
            <input type="text" class="input" placeholder="0" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Vitamin B12 (%)</label>
          <div class="control">
            <input type="text" class="input" placeholder="50" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Dairy?</label>
          <div class="control">
            <input type="text" class="input" placeholder="Leche" />
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="field">
          <label class="label">Tags</label>
          <div class="control">
            <input type="text" class="input" placeholder="0" />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="cancel()">Cancel</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
