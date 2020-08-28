<template>
<div class="mt-3">
  <b-list-group>
    <b-list-group-item v-for="gift in giftList" v-bind:key="gift.id" v-bind:class="{ done : gift.done }">
        Get <span class="ital">{{gift.description}}</span> 
        for <span class="bold">{{gift.giveTo}}</span> 
        before <span v-bind:class="{ 'text-primary' : !gift.done } ">{{gift.giveDate}}</span>
        <span class="right">            
            <b-check v-model="gift.done" v-on:change="updateGift(gift, $event)"></b-check>
        </span>
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
export default {
   props: {
       giftList : Array
    },

    methods: {
        updateGift(gift, checked) {            
            gift.done = checked;
            this.$emit('update-gift', gift);
        }       
    }
}
</script>

<style scoped>
    span.ital {
        font-style: italic;
    }

    span.bold {
        font-weight:bold;
    }    

    span.right {
        float: right;
    }

    .done {
        text-decoration: line-through;
        color : gray;
    }

</style>