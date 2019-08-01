<template>
  <div id="app">
    <NavButtons></NavButtons>

    <router-view />
  </div>
</template>
<script>
  import NavButtons from '@/components/NavButtons.vue'
  export default {
    components: {
      NavButtons
    }
  }
</script>
<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #403e3a;
    margin-right: 3px;
  }

  .purpBtn {
    background-color: #bf5e8b !important;
    color: #ffffe8 !important;
    font-weight: 500;
  }

  .blueBtn {
    background-color: #0896a6 !important;
    color: #ffffe8 !important;
    font-weight: 500;
  }

  .yellowBtn {
    background-color: #ffff48 !important;
    color: #403e3a !important;
    font-weight: 600;
  }

  .blackBtn {
    background-color: #403e3a !important;
    color: #ffffe8 !important;
    font-weight: 500;
  }

  .whiteBtn {
    background-color: #ffffe8 !important;
    color: #0896a6 !important;
    font-weight: bold;
  }

  .greenGradient {
    background: linear-gradient(60deg, #66bb6a, #43a047) !important;
  }

  .purpleGradient {
    background: linear-gradient(60deg, #ab47bc, #8e24aa) !important;
  }

  .blueGradient {
    background: linear-gradient(60deg, #26c6da, #00acc1) !important;
  }

  .orangeGradient {
    background: linear-gradient(60deg, #ffa726, #fb8c00) !important;
  }
</style>