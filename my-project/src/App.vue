<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <ul><router-link to="/">holle</router-link>
      </ul></li>
      <li class="nav-item">
        <ul><router-link to="/Hello2">Hello2</router-link>
      </ul></li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </nav>
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App"
};


<style >


</style>
