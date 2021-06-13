<template>
  <div>
    <h1>Welcome!</h1>
    <!-- <h2>{{listOfDishes}}</h2> -->

    <p>
      This site will provide you with several cookbooks according to your taste!
    </p>

    <button type="button" class="btn btn-success" @click="showSoupsBook()">
      Cookbook - soups
    </button>
    <button type="button" class="btn btn-dark" @click="showMainDishesBook()">
      Cookbook - main dishes
    </button>
    <button type="button" class="btn btn-warning" @click="showDrinksBook()">
      Cookbook - drinks
    </button>

    <FoodList
      :listOfFood="listOfSoups"
      v-show="showSoups"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <FoodList
      :listOfFood="listOfDishes"
      v-show="showDishes"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <FoodList
      :listOfFood="listOfDrinks"
      v-show="showDrinks"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <FoodAdd
      v-show="showSoups"
      @addFood="addFood"
      @listOfTypes="listOfTypesOfFoods"
    />
    <FoodAdd
      v-show="showDishes"
      @addFood="addFood"
      @listOfTypes="listOfTypesOfFoods"
    />
    <FoodAdd
      v-show="showDrinks"
      @addFood="addFood"
      @listOfTypesOfFoods="listOfTypesOfFoods"
    />
  </div>
</template>

<script>
import FoodList from "./components/FoodList.vue";
import FoodAdd from "./components/FoodAdd.vue";

export default {
  name: "App",
  components: {
    FoodList,
    FoodAdd,
  },
  data() {
    return {
      showSoups: false,
      showDishes: false,
      showDrinks: false,
      listOfSoups: [],
      listOfDishes: [],
      listOfDrinks: [],

      listOfTypesOfFoods: ["soup", "dish", "drink"],
    };
  },
  methods: {
    showSoupsBook() {
      this.showSoups = !this.showSoups;

      this.showDishes = false;
      this.showDrinks = false;
    },
    showMainDishesBook() {
      this.showDishes = !this.showDishes;

      this.showSoups = false;
      this.showDrinks = false;
    },
    showDrinksBook() {
      this.showDrinks = !this.showDrinks;

      this.showSoups = false;
      this.showDishes = false;
    },
    deleteItem(id, foodType) {
      console.log(foodType);
      fetch(`http://localhost:3000/food/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: foodType,
        }),
      }).then(this.setAllBooks());
      // this.listOfSoups.splice(index, 1);
    },
    changeData(formName, formDesc, formFinAmo, formPrepLeng, id, foodType) {
      console.log(foodType);
      fetch(`http://localhost:3000/food/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          description: formDesc,
          finalAmount: formFinAmo,
          preparationLength: formPrepLeng,
          id,
          type: foodType,
        }),
      }).then(this.setAllBooks());

      // this.listOfSoups[index].name = formName;
      // this.listOfSoups[index].description = formDesc;
      // this.listOfSoups[index].finalAmount = formFinAmo;
      // this.listOfSoups[index].preparationLength = formPrepLeng;
    },
    addFood(
      formName,
      formDesc,
      formFinAmo,
      formPrepLeng,
      formIngredQuan1,
      formIngredType1,
      formIngredName1,
      formIngredQuan2,
      formIngredType2,
      formIngredName2,
      formIngredQuan3,
      formIngredType3,
      formIngredName3,
      foodType
    ) {
      fetch("http://localhost:3000/food/addSoup/soup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          type: foodType,
          description: formDesc,
          finalAmount: formFinAmo,
          preparationLength: formPrepLeng,
          ingredients: [
            {
              quantity: formIngredQuan1,
              type: formIngredType1,
              nameOfIng: formIngredName1,
            },
            {
              quantity: formIngredQuan2,
              type: formIngredType2,
              nameOfIng: formIngredName2,
            },
            {
              quantity: formIngredQuan3,
              type: formIngredType3,
              nameOfIng: formIngredName3,
            },
          ],
        }),
      }).then(this.setAllBooks());

      // this.listOfSoups.push({
      //   name: formName,
      //   description: formDesc,
      //   finalAmount: formFinAmo,
      //   preparationLength: formPrepLeng,
      //   ingredients: [
      //     {
      //       quantity: formIngredQuan1,
      //       type: formIngredType1,
      //       nameOfIng: formIngredName1,
      //     },
      //     {
      //       quantity: formIngredQuan2,
      //       type: formIngredType2,
      //       nameOfIng: formIngredName2,
      //     },
      //     {
      //       quantity: formIngredQuan3,
      //       type: formIngredType3,
      //       nameOfIng: formIngredName3,
      //     },
      //   ],
      // });
    },
    setAllBooks() {
      setTimeout(() => {
        fetch("http://localhost:3000/food/soups")
          .then((response) => response.json())
          .then((data) => (this.listOfSoups = data));
        fetch("http://localhost:3000/food/dish")
          .then((response) => response.json())
          .then((data) => (this.listOfDishes = data));
        fetch("http://localhost:3000/food/drink")
          .then((response) => response.json())
          .then((data) => (this.listOfDrinks = data));
      }, 300);
    },
  },
  created() {
    this.setAllBooks();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
button {
  margin: 10px;
}
</style>
