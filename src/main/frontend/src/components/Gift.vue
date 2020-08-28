<template>
    <div>
    <b-form inline>
        <label class="sr-only" for="description">Description</label>
        <b-input
            id="description"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="A gift"
            v-model="description"
        ></b-input>

        <label class="sr-only" for="giveto">Give To</label>
        <b-input-group prepend="for" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input 
            id="giveto" 
            placeholder="... name" 
            v-model="giveTo"></b-input>
        </b-input-group>

        <label class="sr-only" for="giveDate">Give Date</label>
        <b-form-datepicker 
            id="giveDate" 
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Giving date"
            v-model="giveDate"></b-form-datepicker>

        <b-button variant="primary" @click="addGift">Add</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
 data(){
     return {
         description: '',
         giveTo: '',
         giveDate: ''
     }
 },

 methods: {
     addGift() {
         if(this.description && this.giveTo && this.giveDate){
            let newGift = {
                description : this.description,
                giveTo: this.giveTo,
                giveDate : this.giveDate
                };
            this.$emit('gift-added', newGift);
            this.reset();
         }         
     },

     reset(){
        this.description = '';
        this.giveTo = '';
        this.giveDate = '';        
     }
 }
}
</script>

<style scoped>

</style>