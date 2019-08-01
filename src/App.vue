<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/questions-test">Test</router-link>|
      <router-link to="/quiz-creator">Build A Quiz</router-link>
    </div>
    <router-view />
  </div>
</template>

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
</style>