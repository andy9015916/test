<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">久林針織</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <ul>
              <router-link to="/">Hello</router-link>
            </ul>
          </li>
          <li class="nav-item">
            <ul>
              <router-link to="/Hello2">Hello2</router-link>
            </ul>
          </li>
          <li class="dropdown">
            <ul>
              <a class="dropdown-toggle" data-toggle="dropdown" router-link to="/A1">
                A訂單作業檔
                <span class="caret"></span>
              </a>

              <ul class="dropdown-menu">
                <li>
                  <router-link to="A1">A1 訂單作業檔</router-link>
                </li>
                <li>
                  <router-link to="A2">A2 訂單明細(合格/出貨)</router-link>
                </li>
                <li>
                  <router-link to="A3">A3 訂單總明細表</router-link>
                </li>
                <li>
                  <router-link to="A4">A4 紗料需求明細</router-link>
                </li>
                <li>
                  <router-link to="A5">A5 訂單未生產明細</router-link>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App"
};

<style></style>;
