<template>
  <nav class="navbar bg-light mb-3">
    <div class="container-fluid ms-5">
      <a class="navbar-brand" href="#">
        <img alt="Vue logo" src="@/assets/logo.png" height="24" />
      </a>
      <div class="d-flex">
        <!-- <router-link class="mx-3" to="/">Home</router-link> -->
        <!-- <router-link class="me-5" to="/edit">About</router-link> -->
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
