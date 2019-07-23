<template>
  <div class="car-form">
    <div class="row justify-content-center">
      <form class="col-8 pb-5" @submit.prevent="addCar">
        <div class="form-group">
          <label for="make">Make</label>
          <input type="text" name="make" class="form-control" id="make" placeholder="Enter make" v-model="newCar.make">
        </div>
        <div class="form-group">
          <label for="model">Model</label>
          <input type="text" class="form-control" id="model" placeholder="Enter Model" v-model="newCar.model">
        </div>
        <div class="form-group">
          <label for="img">Image</label>
          <input type="text" class="form-control" id="img" placeholder="Enter image url" v-model="newCar.imgUrl">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" v-model="newCar.price">
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="number" class="form-control" min="1950" id="year" v-model="newCar.year">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'carform',
  data(){
    return {
      newCar: {}
    }
  },
  computed:{},
  methods:{
     addCar() {
        this.$store.dispatch('addCar', this.newCar)
      }
  },
  components:{}
}
</script>


<style scoped>

</style>