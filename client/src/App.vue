<template>
  <div>
    <h1>Welcome!</h1>
    <p>This site will provide you
     with several cookbooks according to your taste!</p>

    <button type="button" class="btn btn-success" @click="toogleOff()">Cookbook - soups</button>
    <button type="button" class="btn btn-dark">Cookbook - main dishes</button>
    <button type="button" class="btn btn-warning">Cookbook - drinks</button>


    <SoupsList :listOfSoups="listOfSoups" v-show="isShowed"/>
    <!-- <p v-for="item in listOfSoups" :key=item> {{ item.name }} </p> -->
    
  </div>
</template>

<script>
import SoupsList from "./components/SoupsList.vue";

export default {
  name: "App",
  components: {
    SoupsList,
  },
  methods: {
    toogleOff() {
      this.isShowed = !this.isShowed;
    }
  },
  data() {
    return {
      isShowed: true,
      listOfSoups: [
        {
          name: "Ham and Split Pea Soup",
          description: [
            {
              firstStep: `Place the butter in a large soup pot over medium-low heat. Stir in onion, celery, and sliced garlic. 
              Cook slowly until the onions are translucent but not brown, 5 to 8 minutes.`,
            },
            {
              secondStep: `Mix in ham, bay leaf, and split peas. Pour in chicken stock and water. Stir to combine, and simmer
              slowly until the peas are tender and the soup is thick, about 1 hour and 15 minutes. Stir occasionally. Season
              with salt and black pepper to serve.`
            }
          ],
          finalAmount: 8,
          preparationLength: 110,
          ingredients: [
            {
              quantity: 2,
              type: "tablespoons",
              nameOfIng: "butter"
            },
            {
              quantity: 0.5,
              type: "piece",
              nameOfIng: "onion"
            },
            {
              quantity: 2,
              type: "ribs",
              nameOfIng: "celery"
            },
            {
              quantity: 3,
              type: "cloves",
              nameOfIng: "garlic"
            },
            {
              quantity: 1,
              type: "pound",
              nameOfIng: "ham"
            },
            {
              quantity: 1,
              type: "piece",
              nameOfIng: "bay leaf"
            },
            {
              quantity: 1,
              type: "quart",
              nameOfIng: "chicken stock"
            },
            {
              quantity: 2.5,
              type: "coups",
              nameOfIng: "water"
            },
            {
              quantity: 0,
              type: "to taste",
              nameOfIng: "salt and ground black pepper"
            }
          ]
        },
        {
          name: "Cream Soup Base",
          description: [
            {
              firstStep: `Melt butter in a saucepan. Add flour and make a paste. Add milk and bouillon cubes. 
              Cook over low heat until thickened. Add pepper to taste. Add more milk when adding the other soup ingredients, depending on the thickness you desire.`,
            },
            {
              secondStep: `To this base you may add steamed broccoli and American cheese; or chunks of baked potato (peel and all) with American cheese, bacon pieces, 
              and chives; or pureed, stewed tomatoes for a bisque; or leeks that have been cleaned well, steamed, and chopped; or cooked asparagus cut in pieces 
              (if canned asparagus is used, add some of the liquid as well), topped with grated cheese and bacon pieces.`
            }
          ],
          finalAmount: 8,
          preparationLength: 15,
          ingredients: [
            {
              quantity: 0.5,
              type: "cup",
              nameOfIng: "butter"
            },
            {
              quantity: 6,
              type: "tablesponn",
              nameOfIng: "flour"
            },
            {
              quantity: 2,
              type: "cups",
              nameOfIng: "milk"
            },
            {
              quantity: 2,
              type: "cubes",
              nameOfIng: "chicken bouillon"
            },
            {
              quantity: 0,
              type: "to taste",
              nameOfIng: "ground black pepper"
            }
          ]
        },
        {
          name: "Miso Soup",
          description: [
            {
              firstStep: `In a medium saucepan over medium-high heat, combine dashi granules and water; bring to a boil. 
              Reduce heat to medium, and whisk in the miso paste. Stir in tofu. Separate the layers of the green onions, 
              and add them to the soup. Simmer gently for 2 to 3 minutes before serving.`,
            }
          ],
          finalAmount: 4,
          preparationLength: 20,
          ingredients: [
            {
              quantity: 2,
              type: "teaspoons",
              nameOfIng: "dashi granules"
            },
            {
              quantity: 0.5,
              type: "cup",
              nameOfIng: "wap"
            },
            {
              quantity: 3,
              type: "tablespoons",
              nameOfIng: "miso paste"
            },
            {
              quantity: 1,
              type: "package",
              nameOfIng: "silken tofu"
            },
            {
              quantity: 2,
              type: "pieces",
              nameOfIng: "green onions"
            }
          ]
        }
      ],
    };
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
  margin-top: 60px;
}
</style>
