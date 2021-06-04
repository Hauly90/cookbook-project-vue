<template>
  <div class="soupsList">
    <h2>Please choose soup from droplist:</h2>

    <div class="dropdown show">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        List of soups:
      </a>

      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenuLink"
        v-for="oneSoup in listOfSoups"
        :key="oneSoup"
      >
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

    <div v-for="oneSoup in listOfSoups" :key="oneSoup">
      <Soup
        :oneSoupName="oneSoup.name"
        :oneSoupDescription="oneSoup.description"
        :oneSoupFinalAmount="oneSoup.finalAmount"
        :oneSoupPrepLength="oneSoup.preparationLength"
        :oneSoupIngredients="oneSoup.ingredients"
        v-show="isShowed"
      />
    </div>

    <div>
      <Soup
        :oneSoupName="soupName"
        :oneSoupDescription="soupDescription"
        :oneSoupFinalAmount="soupFinalAmount"
        :oneSoupPrepLength="soupPrepLength"
        :oneSoupIngredients="soupIngredients"
        v-show="showIt"
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
      isShowed: false,
      showIt: false,
      soupName: "",
      soupDescription: [],
      soupFinalAmount: 0,
      soupPrepLength: 0,
      soupIngredients: [],
      list: this.listOfSoups,
    };
  },
  methods: {
    toogleOff() {
      this.isShowed = true;
    },
    showItem(index) {
      this.soupName = this.list[index].name;
      this.soupDescription = this.list[index].description;
      this.soupFinalAmount = this.list[index].finalAmount;
      this.soupPrepLength = this.list[index].preparationLength;
      this.soupIngredients = this.list[index].ingredients;
    
      this.showIt = true;
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
a {
  color: #42b983;
}
</style>