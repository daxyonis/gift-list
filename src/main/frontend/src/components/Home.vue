<template>
<b-row>
  <b-col></b-col>
  <b-col cols="10" lg="8">
   <h1>{{ title }}</h1>
   <Gift v-on:gift-added="giftAdded"></Gift>
   <GiftList v-bind:gift-list="gifts"></GiftList>
  </b-col>
  <b-col></b-col>
</b-row>
</template>

<script>
import Gift from './Gift.vue';
import GiftList from './GiftList.vue';

export default {
  name: 'Home',
  data(){
    return {
      title : 'My Gift List',
      gifts: [],
      errors: []
    }
  },
  components:{
    Gift,
    GiftList
  },
  // Fetches posts when the component is created.
  async created() {  
    try {
      const response = await this.$http.get(`${process.env.VUE_APP_API_URL}/gift`)
      this.gifts = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },
  methods: {
    async giftAdded(newGift){
      try {
        const response = await this.$http.post(`${process.env.VUE_APP_API_URL}/gift`, newGift)
        this.gifts.push(response.data)
      } catch (e) {
      this.errors.push(e)
      }      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
