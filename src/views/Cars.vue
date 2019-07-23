<template>
  <div class="cars container">
    <h1>Where the Cars Live</h1>
    <router-link :to="{name: 'create'}">create</router-link>
    <div class="row justify-content-center">
      <router-view/>
    </div>
    <div class="row">
      <!-- cars in the v-for references the method name of the computed called "cars" -->
      <div class="car col-4 border rounded border-secondary" v-for="car in cars" @click="viewCar(car)">
        <h5>{{car.make}}</h5>
        <img :src="car.imgUrl" alt="">
        <p>{{car.model}}</p>
        <p>{{car.year}}</p>
        <p>{{car.price}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {
        newCar: {}
      }
    },
    mounted() {
      this.$store.dispatch('getCars')
    },
    computed: {
      // this references the collection on our store's state
      cars() {
        return this.$store.state.cars
      }
    },
    methods: {
      viewCar(car) {
        // we could pass the car to the state to set as active, but if we refresh we would lose the data in our state and our car view will break, we will trust the view itself to load the correct car from the server
        this.$router.push({ name: 'car', params: { carId: car._id } })

      },
      addCar() {
        this.$store.dispatch('addCar', this.newCar)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 200px;
  }
</style>