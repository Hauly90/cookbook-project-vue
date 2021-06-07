<template>
  <div>
    <h1>Welcome!</h1>

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

    <SoupsList
      :listOfSoups="listOfSoups"
      v-show="showSoups"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <SoupsList
      :listOfSoups="listOfDishes"
      v-show="showDishes"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <SoupsList
      :listOfSoups="listOfDrinks"
      v-show="showDrinks"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <SoupAdd v-show="showSoups" @addTodo="addSoup" />
    <SoupAdd v-show="showDishes" @addTodo="addSoup" />
    <SoupAdd v-show="showDrinks" @addTodo="addSoup" />
  </div>
</template>

<script>
import SoupsList from "./components/SoupsList.vue";
import SoupAdd from "./components/SoupAdd.vue";

export default {
  name: "App",
  components: {
    SoupsList,
    SoupAdd,
  },
  data() {
    return {
      showSoups: false,
      showDishes: false,
      showDrinks: false,
      listOfSoups: [],
      listOfDishes: [],
      listOfDrinks: [],
    };
  },
  methods: {
    showSoupsBook() {
      this.showSoups = !this.showSoups;
    },
    showMainDishesBook() {
      this.showDishes = !this.showDishes;
    },
    showDrinksBook() {
      this.showDrinks = !this.showDrinks;
    },
    deleteItem(id) {
      fetch(`http://localhost:3000/soup/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(this.setAllBooks());
      // this.listOfSoups.splice(index, 1);
    },
    changeData(formName, formDesc, formFinAmo, formPrepLeng, id) {
      fetch(`http://localhost:3000/soup/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          description: formDesc,
          finalAmount: formFinAmo,
          preparationLength: formPrepLeng,
          id,
        }),
      }).then(this.setAllBooks());

      // this.listOfSoups[index].name = formName;
      // this.listOfSoups[index].description = formDesc;
      // this.listOfSoups[index].finalAmount = formFinAmo;
      // this.listOfSoups[index].preparationLength = formPrepLeng;
    },
    addSoup(
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
      formIngredName3
    ) {
      fetch("http://localhost:3000/soup/addSoup/soup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
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
      }).then(this.showSoupList());

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
        fetch("http://localhost:3000/soup/")
          .then((response) => response.json())
          .then((data) => (this.listOfSoups = data));
        fetch("http://localhost:3000/dish/")
          .then((response) => response.json())
          .then((data) => (this.listOfDishes = data));
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
