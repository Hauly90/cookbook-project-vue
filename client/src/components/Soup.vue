<template>
  <div class="soupsList">
    <div class="allSoupsInfo" v-show="showAllInfo">
      <h2>{{ oneSoupName }}</h2>

      <span type="button" @click="showEditing()" v-show="showIc">
        <!-- EDIT -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-pen"
          viewBox="0 0 16 16"
        >
          <path
            d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
          />
        </svg>
      </span>

      <span type="button" @click="deleteItem()" v-show="showIc">
        <!-- DELETE -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </span>

      <div class="card" style="width: 30rem">
        <div class="card-body">
          <h4>Step by step:</h4>
          <ul v-for="(step, index) in oneSoupDescription" :key="step">
            <li>{{ index + 1 + ". " + step }}</li>
          </ul>
        </div>
      </div>

      <div class="card" style="width: 30rem">
        <div class="card-body">
          <h4>Final amount (servings):</h4>
          <p>{{ oneSoupFinalAmount }}</p>
        </div>
      </div>

      <div class="card" style="width: 30rem">
        <div class="card-body">
          <h4>Preparation length (in minutes):</h4>
          <p>{{ oneSoupPrepLength }}</p>
        </div>
      </div>

      <!-- <div class="card" style="width: 30rem">
      <div class="card-body">
        <h4>Ingredients:</h4>
        <ul v-for="ingred in oneSoupIngredients" :key="ingred" id="ingredients">
          <li style="list">
            {{
              ingred.nameOfIng +
              " - " +
              (ingred.quantity === 0 ? "" : ingred.quantity) +
              " " +
              ingred.type
            }}
          </li>
        </ul>
      </div>
    </div> -->

      <p>
        <a
          class="btn btn-dark"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
          >Show ingredients</a
        >
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card" style="width: 30rem">
              <div class="card-body">
                <h4>Ingredients:</h4>
                <ul
                  v-for="ingred in oneSoupIngredients"
                  :key="ingred"
                  id="ingredients"
                >
                  <li style="list">
                    {{
                      ingred.nameOfIng +
                      " - " +
                      (ingred.quantity === 0 ? "" : ingred.quantity) +
                      " " +
                      ingred.type
                    }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form
      v-show="showForm"
      class="card"
      style="width: 35rem"
      @submit.prevent="onSubmit()"
    >
      <!-- @submit.prevent="onSubmit()" -->
      <label for="desc" id="someDesc">Step 1</label>
      <textarea name="desc" rows="6" v-model="formDesc[0]"></textarea>

      <label for="desc" id="someDesc">Step 2</label>
      <textarea name="desc" rows="6" v-model="formDesc[1]"></textarea>

      <label for="desc" id="someDesc">Step 3</label>
      <textarea name="desc" rows="6" v-model="formDesc[2]"></textarea>

      <label for="name" id="someName">Name</label>
      <input type="text" id="name" name="name" v-model="formName" />

      <label for="number" id="someNumber">Final amount</label>
      <input type="text" id="number" name="number" v-model="formFinAmo" />

      <label for="prepLength" id="somePrepLength">Preparation length</label>
      <input
        type="text"
        id="prepLength"
        name="prepLength"
        v-model="formPrepLeng"
      />

      <!-- <label for="ingred" id="someLabelIngred">Ingredient 1</label>
      <textarea
        name="ingred"
        rows="1"
        placeholder="quantity"
        class="ingreds"
      ></textarea>
      <textarea
        name="ingred"
        rows="1"
        placeholder="type (piece, ribs, quart)"
        class="ingreds"
      ></textarea>
      <textarea
        name="ingred"
        rows="1"
        placeholder="name of the ingredient"
        class="ingreds"
      ></textarea> -->

      <!-- <label for="material" id="someMaterial">Ingredients</label>
      <input
        type="text"
        id="quantity"
        name="material"
        placeholder="quantity"
        v-model.lazy="formIngred1"
      /> -->

      <button class="btn btn-outline-primary" @click="hideEditing()">
        Close X
      </button>
      <button class="btn btn-outline-primary" @click="fillData()">
        Set to original values
      </button>
      <button class="btn btn-outline-primary" @click="changeData()">
        Change values
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      showIc: this.showIcon,
      showForm: false,
      showAllInfo: true,

      formName: this.oneSoupName,
      formDesc: this.oneSoupDescription,
      formFinAmo: this.oneSoupFinalAmount,
      formPrepLeng: this.oneSoupPrepLength,

      formIngred1: this.oneSoupIngredients,
    };
  },
  props: {
    oneSoupName: String,
    oneSoupDescription: Array,
    oneSoupFinalAmount: Number,
    oneSoupPrepLength: Number,
    oneSoupIngredients: Array,
    oneSoupIndex: Number,
    showIcon: Boolean,
  },

  methods: {
    showEditing() {
      this.showAllInfo = false;
      this.showForm = true;
    },
    hideEditing() {
      this.showAllInfo = true;
      this.showForm = false;
    },
    deleteItem() {
      this.$emit("deleteItem", this.oneSoupIndex);
    },
    fillData() {
      this.formName = this.oneSoupName;
      this.formDesc = this.oneSoupDescription;
      this.formFinAmo = this.oneSoupFinalAmount;
      this.formPrepLeng = this.oneSoupPrepLength;
      this.formIngred1 = this.oneSoupIngredients;
    },
    changeData() {
      console.log(this.formName);
      this.$emit(
        "changeData",
        this.oneSoupIndex,
        this.formName,
        this.formDesc,
        parseInt(this.formFinAmo),
        parseInt(this.formPrepLeng),
      );

      setTimeout(() => {
        this.fillData();
        this.hideEditing();
      }, 300);

      // if (this.formName !== "" && this.formFinAmo !== 0 && this.formPrepLeng !== 0) {

      // }
    },
    onSubmit() {},
  },
  // created() {
  //   this.fillData();
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  display: inline-block;
  margin-top: 10px;
}
h4 {
  margin: 0px 0px 10px 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
#ingredients {
  list-style-type: disc !important;
  padding-left: 1em;
}
li {
  text-align: justify;
  margin: 0 10px;
}
.card {
  margin: auto;
  margin-bottom: 10px;
}
.card-body {
  padding-bottom: 5px;
}
.bi-pen {
  margin: 0px 5px 8px 15px;
}
.bi-trash {
  margin: 0px 5px 8px 5px;
}
#desc {
  height: 120px;
  text-align: left-top;
  max-width: 15rem;
  text-decoration: line-through;
  /* font-size: 14pt; */
}
form {
  padding: 15px;
}
input,
textarea {
  margin-bottom: 10px;
}
.ingreds {
  max-width: 200px;
  display: block;
}
</style>