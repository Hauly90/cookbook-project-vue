<template>
  <div class="soupsList">
    <h2>Please choose soup from droplist:</h2>

    <button
      class="btn btn-primary"
      v-show="!showAllRec"
      @click="showAllRecipes()"
    >
      Show all recipes
    </button>
    <button
      class="btn btn-primary"
      v-show="showAllRec"
      @click="showAllRecipes()"
    >
      Hide all recipes
    </button>

    <button class="btn btn-primary" v-show="showIt" @click="hideItem()">
      Hide current recipe
    </button>

    <div class="dropdown show">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        v-show="!showIt"
      >
        List of soups:
      </button>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div
          class="dropdown-item"
          href="#"
          v-for="(oneSoup, index) in listOfSoups"
          :key="oneSoup"
        >
          <a class="dropdown-item" href="#" @click="showItem(index)">
            {{ oneSoup.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Whole list -->
    <div v-for="oneSoup in listOfSoups" :key="oneSoup">
      <Soup
        :oneSoupName="oneSoup.name"
        :oneSoupDescription="oneSoup.description"
        :oneSoupFinalAmount="oneSoup.finalAmount"
        :oneSoupPrepLength="oneSoup.preparationLength"
        :oneSoupIngredients="oneSoup.ingredients"
        v-show="showAllRec"
      />
    </div>

    <!-- One soup -->
    <div>
      <Soup
        :oneSoupName="soupName"
        :oneSoupDescription="soupDescription"
        :oneSoupFinalAmount="soupFinalAmount"
        :oneSoupPrepLength="soupPrepLength"
        :oneSoupIngredients="soupIngredients"
        :oneSoupIndex="soupIndex"
        :showIcon="true"
        v-show="showIt"
        @deleteItem="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import Soup from "./Soup.vue";

export default {
  components: {
    Soup,
  },
  props: {
    listOfSoups: Array,
  },
  data() {
    return {
      showAllRec: false,
      showIt: false,

      soupName: "",
      soupDescription: [],
      soupFinalAmount: 0,
      soupPrepLength: 0,
      soupIngredients: [],
      soupIndex: 1,
      list: this.listOfSoups,
    };
  },
  methods: {
    showAllRecipes() {
      this.showAllRec = !this.showAllRec;
    },
    showItem(index) {
      this.soupName = this.list[index].name;
      this.soupDescription = this.list[index].description;
      this.soupFinalAmount = this.list[index].finalAmount;
      this.soupPrepLength = this.list[index].preparationLength;
      this.soupIngredients = this.list[index].ingredients;

      this.soupIndex = index;
      this.showIt = true;
    },
    hideItem() {
      this.showIt = false;
    },
    deleteItem(index) {
      this.hideItem();
      this.$emit("deleteItem", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.btn {
  display: inline-block;
}
</style>