<template>
    <b-row>
        <b-col lg="1"></b-col>
        <b-col lg="10">
        <b-form inline>
            <label class="sr-only" for="description">Description</label>
            <b-input
                id="description"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Gift description"
                v-model="description"
            ></b-input>

            <label class="sr-only" for="giveto">Give To</label>
            <b-input-group prepend="for" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input 
                id="giveto" 
                placeholder="... recipient name" 
                v-model="giveTo"></b-input>
            </b-input-group>

            <label class="sr-only" for="giveDate">Give Date</label>
            <b-form-datepicker 
                id="giveDate" 
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Giving date"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                locale="fr"
                v-model="giveDate"></b-form-datepicker>

            <b-button variant="primary" @click="addGift">Add</b-button>
        </b-form>
        </b-col>
        <b-col lg="1"></b-col>
    </b-row>
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