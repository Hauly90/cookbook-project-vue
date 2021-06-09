<template>
  <div class="foodList">
    <h3>Please choose your action (list, details, add)</h3>
    <!-- <h2>{{ listOfFood }}</h2> -->
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
        List of recipes:
      </button>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div
          class="dropdown-item"
          href="#"
          v-for="(oneFood, index) in listOfFood"
          :key="oneFood"
        >
          <a class="dropdown-item" href="#" @click="showItem(index)">
            {{ oneFood.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Whole list -->
    <div v-for="oneFood in listOfFood" :key="oneFood">
      <Food
        :oneFoodName="oneFood.name"
        :oneFoodDescription="oneFood.description"
        :oneFoodFinalAmount="oneFood.finalAmount"
        :oneFoodPrepLength="oneFood.preparationLength"
        :oneFoodIngredients="oneFood.ingredients"
        v-show="showAllRec"
      />
    </div>

    <!-- One food -->
    <div>
      <Food
        :oneFoodName="foodName"
        :oneFoodDescription="foodDescription"
        :oneFoodFinalAmount="foodFinalAmount"
        :oneFoodPrepLength="foodPrepLength"
        :oneFoodIngredients="foodIngredients"
        :oneFoodIndex="foodIndex"
        :oneFoodId="foodId"
        :oneFoodType="foodType"
        :showIcon="true"
        v-show="showIt"
        @deleteItem="deleteItem"
        @changeData="changeData"
      />
    </div>
  </div>
</template>

<script>
import Food from "./Food.vue";

export default {
  components: {
    Food,
  },
  props: {
    listOfFood: Array,
  },
  data() {
    return {
      showAllRec: false,
      showIt: false,

      foodName: "",
      foodDescription: [],
      foodFinalAmount: 0,
      foodPrepLength: 0,
      foodIngredients: [],
      foodIndex: 1,
      list: this.listOfFood,
      foodId: "",
      foodType: "",
    };
  },
  methods: {
    showAllRecipes() {
      this.showAllRec = !this.showAllRec;
    },
    showItem(index) {
      // console.log(this.listOfFood[index].name);

      this.foodName = this.listOfFood[index].name;
      this.foodDescription = this.listOfFood[index].description;
      this.foodFinalAmount = this.listOfFood[index].finalAmount;
      this.foodPrepLength = this.listOfFood[index].preparationLength;
      this.foodIngredients = this.listOfFood[index].ingredients;

      this.foodIndex = index;
      this.foodId = this.listOfFood[index].id;
      this.foodType = this.listOfFood[index].type;

      this.showIt = true;
    },
    hideItem() {
      this.showIt = false;
    },
    deleteItem(id, foodType) {
      this.hideItem();
      this.$emit("deleteItem", id, foodType);
    },
    changeData(formName, formDesc, formFinAmo, formPrepLeng, id, foodType) {
        this.$emit("changeData", formName, formDesc, formFinAmo, formPrepLeng, id, foodType);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
} */
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