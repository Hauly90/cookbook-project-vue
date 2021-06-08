<template>
  <div class="addSoup">
    <button v-if="!isShowed" class="btn btn-light" @click="showEditing()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-plus-lg"
        viewBox="0 0 16 16"
        margin-top="15"
      >
        <path
          d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1
          1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
        />
      </svg>
    </button>

    <form
      v-show="isShowed"
      class="card"
      style="width: 35rem"
      @submit.prevent="onSubmit()"
    >
      <!-- @submit.prevent="onSubmit()" -->
      <label for="name" id="someName">Name</label>
      <input type="text" id="name" name="name" v-model="formName" />

      <label for="desc" id="someDesc1">Step 1</label>
      <textarea rows="4" class="description" v-model="formDesc[0]"></textarea>

      <label for="desc" id="someDesc2">Step 2</label>
      <textarea rows="4" class="description" v-model="formDesc[1]"></textarea>

      <label for="desc" id="someDesc3">Step 3</label>
      <textarea rows="4" class="description" v-model="formDesc[2]"></textarea>

      <label for="number" id="someNumber">Final amount</label>
      <input type="text" id="number" name="number" v-model="formFinAmo" />

      <label for="prepLength" id="somePrepLength">Preparation length</label>
      <input
        type="text"
        id="prepLength"
        name="prepLength"
        v-model="formPrepLeng"
      />

      <label for="ingred" id="someLabelIngred">Ingredient 1</label>
      <input
        name="ingred"
        rows="1"
        placeholder="quantity"
        class="ingreds"
        v-model="formIngredQuan1"
      />
      <input
        rows="1"
        placeholder="type (piece, ribs, quart)"
        class="ingreds"
        v-model="formIngredType1"
      />
      <input
        rows="1"
        placeholder="name of the ingredient"
        class="ingreds"
        v-model="formIngredName1"
      />

      <label for="ingred" id="someLabelIngred2">Ingredient 2</label>
      <input
        rows="1"
        placeholder="quantity"
        class="ingreds"
        v-model="formIngredQuan2"
      />
      <input
        rows="1"
        placeholder="type (piece, ribs, quart)"
        class="ingreds"
        v-model="formIngredType2"
      />
      <input
        rows="1"
        placeholder="name of the ingredient"
        class="ingreds"
        v-model="formIngredName2"
      />

      <label for="ingred" id="someLabelIngred3">Ingredient 3</label>
      <input
        rows="1"
        placeholder="quantity"
        class="ingreds"
        v-model="formIngredQuan3"
      />
      <input
        rows="1"
        placeholder="type (piece, ribs, quart)"
        class="ingreds"
        v-model="formIngredType3"
      />
      <input
        rows="1"
        placeholder="name of the ingredient"
        class="ingreds"
        v-model="formIngredName3"
      />

      <!-- <h1>{{ listOfTypesOfFoods[0] }}</h1> -->

      <label for="types">Choose a type of food:</label>

      <select name="types" id="type" v-model="typeOfFood">
        <option value="soup" class="typeOfF" >soup</option>
        <option value="dish" class="typeOfF">dish</option>
        <option value="drink" class="typeOfF">drink</option>
      </select>

      <!-- <div class="dropdown show">
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
            v-for="oneType in listOfTypes"
            :key="oneType"
          >
            <a class="dropdown-item" href="#" @click="showItem">
              {{ oneType.name }}
            </a>
          </div>
        </div>
      </div> -->

      <button class="btn btn-outline-primary" @click.prevent="createNew()">
        Create
      </button>
      <button class="btn btn-outline-primary" @click="hideEditing()">
        Close X
      </button>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      isShowed: false,

      formName: "",
      formDesc: [],
      formFinAmo: 0,
      formPrepLeng: 0,

      formIngredQuan1: 0,
      formIngredType1: "",
      formIngredName1: "",

      formIngredQuan2: 0,
      formIngredType2: "",
      formIngredName2: "",

      formIngredQuan3: 0,
      formIngredType3: "",
      formIngredName3: "",

      typeOfFood: "",

      list: this.listOfTypesOfFoods,
    };
  },
  props: {
    listOfTypesOfFoods: Array,
  },
  methods: {
    showEditing() {
      this.isShowed = true;
    },
    createNew() {
      console.log(this.formIngredQuan1);
      console.log(this.formIngredType1);
      console.log(this.formIngredName1);

      if (this.formName !== "") {
        this.$emit(
          "addTodo",
          this.formName,
          this.formDesc,
          parseInt(this.formFinAmo),
          parseInt(this.formPrepLeng),
          this.formIngredQuan1,
          this.formIngredType1,
          this.formIngredName1,
          this.formIngredQuan2,
          this.formIngredType2,
          this.formIngredName2,
          this.formIngredQuan3,
          this.formIngredType3,
          this.formIngredName3,
          this.typeOfFood,
        );

        this.isShowed = false;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success!",
          text: "Recipe created!",
          showConfirmButton: true,
          confirmButtonColor: "rgb(140, 212, 245)",
          // timer: 1500,
        });
      }
    },
    hideEditing() {
      this.isShowed = false;
    },
    onSubmit() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  font-size-adjust: inherit;
  font-weight: bold;
}
.card {
  margin: 40px auto;
  padding: 10px;
}
form {
  margin: 20px;
}
.btn {
  margin-top: 15px;
}
.description {
  height: 100px;
  max-height: 200px;
}
form {
  padding: 15px;
}
input,
textarea {
  margin-bottom: 10px;
}
.ingreds,
#type {
  max-width: 200px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
</style>
