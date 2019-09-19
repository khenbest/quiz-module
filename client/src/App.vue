<template>
  <div id="app">
    <NavButtons></NavButtons>
    <router-view />
  </div>
</template>
<script>
  import NavButtons from "@/components/NavButtons.vue";
  export default {
    components: {
      NavButtons
    }
  };
</script>
<style>
  ::-webkit-scrollbar {
    display: none;
  }

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