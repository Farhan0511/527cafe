<template>
  <div class="home">
    <navbar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
