<template>
  <div>
    <h1>Welcome!</h1>

    <p>
      This site will provide you with several cookbooks according to your taste!
    </p>

    <button type="button" class="btn btn-success" @click="showCookbook()">
      Cookbook - soups
    </button>
    <button type="button" class="btn btn-dark">Cookbook - main dishes</button>
    <button type="button" class="btn btn-warning">Cookbook - drinks</button>

    <SoupsList
      :listOfSoups="listOfSoups"
      v-show="isShowed"
      @deleteItem="deleteItem"
      @changeData="changeData"
    />

    <SoupAdd v-show="isShowed" @addTodo="addSoup" />
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
      isShowed: false,
      listOfSoups: [],
    };
  },
  methods: {
    showCookbook() {
      this.isShowed = !this.isShowed;
    },
    deleteItem(id) {
      fetch(`http://localhost:3000/soup/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(this.showSoupList());
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
      }).then(this.showSoupList());

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
    showSoupList() {
      setTimeout(() => {
        fetch("http://localhost:3000/soup/")
          .then((response) => response.json())
          .then((data) => (this.listOfSoups = data));
      }, 300);
    },
  },
  created() {
    this.showSoupList();
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
