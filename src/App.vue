<template>
  <div id="app">




  Hello



  </div>
</template>

<script>
import { getItems } from './utils'

export default {
  name: 'App',
  components: {
  },
  async mounted() {
    const items = await getItems();
    console.log(items);
  }
}
</script>

<style>

</style>
