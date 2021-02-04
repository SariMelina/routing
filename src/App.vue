<template>
  <div class="container">
    <Header/>
    <div class="jumbotron">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.component.vue'

export default {
  components: {
    Header : Header
  }
}
</script>

<style>

</style>
