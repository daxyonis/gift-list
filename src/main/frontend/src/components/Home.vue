<template>
<b-row>
  <b-col></b-col>
  <b-col cols="10" lg="8">
   <h1>{{ title }}</h1>
   <Gift v-on:gift-added="giftAdded"></Gift>
   <GiftList v-on:update-gift="updateGift" v-bind:gift-list="gifts"></GiftList>
   <div class="mt-3 right" v-if="gifts.length > 0">
    <b-button-group>
      <b-button variant="outline-primary" @click="checkAll">Check All</b-button>
      <b-button variant="outline-secondary" @click="uncheckAll">Uncheck All</b-button>
      <b-button variant="outline-danger" @click="clearAll">Clear All</b-button>
    </b-button-group>
  </div>
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
    },

    async updateGift(gift){
      try{
        await this.$http.post(`${process.env.VUE_APP_API_URL}/gift/${gift.id}`, gift)              
      } catch (e) {
        this.errors.push(e)
      }
    },

    checkAll() {
      this.gifts.forEach(gift => {
        // Update only those that are not yet checked
        if(!gift.done){
          gift.done = true;
          this.updateGift(gift);
        }
      });
    },

    uncheckAll(){
      this.gifts.forEach(gift => {
        // Update only those that are checked
        if(gift.done){
          gift.done = false;
          this.updateGift(gift);
        }
      });
    },

    async clearAll(){
      try{
        await this.$http.delete(`${process.env.VUE_APP_API_URL}/gift`)
        this.gifts = [];
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

.right {
  float:right
}
</style>
