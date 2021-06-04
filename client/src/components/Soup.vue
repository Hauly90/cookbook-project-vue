<template>
  <div class="soupsList">
    <div class="card" style="width: 30rem">
      <h2>{{ oneSoupName }}</h2>
      <ul v-for="item in oneSoupDescription" :key="item">
        <li>{{ item.firstStep }}</li>
        <li>{{ item.secondStep }}</li>
      </ul>
    </div>

    

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    oneSoupName: String,
    oneSoupDescription: Array,
    oneSoupFinalAmount: Number,
    oneSoupPreparationLength: Number,
    oneSoupIngredients: Array,
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
.card {
  margin: auto;
}
</style>