<template>
<div class="mt-3">
  <b-list-group>
    <b-list-group-item v-for="gift in giftList" v-bind:key="gift.id">
        Get <span class="ital">{{gift.description}}</span> 
        for <span class="bold">{{gift.giveTo}}</span> 
        before <span class="text-primary">{{gift.giveDate}}</span>
    </b-list-group-item>
  </b-list-group>
</div>
</template>

<script>
export default {
   props: {
       giftList : Array
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

</style>