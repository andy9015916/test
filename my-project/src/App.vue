<template>
  <div id="app">
    <!-- navbar 開頭-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">久林針織</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <ul>
              <router-link to="/">Hello</router-link>
            </ul>
          </li>
          <li class="nav-item" v-for="item in navbar">
            <ul>
              <router-link :to="item.idd">{{ item.p }}</router-link>
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
    <!-- Sidebar邊目錄 -->
    <div id="wrapper" class="toggled">
      <!-- Sidebar -->
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand" v-for="item in Sidebar">
            <div v-if="$route.name==item.idd">
              <a href="#">{{ item.p }}</a>
            </div>
            <div v-else></div>
          </li>
        </ul>
      </div>
      <!-- /#sidebar-wrapper -->
      <!-- Page Content 子內容-->
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <p>
            <router-view />
            <img src="./assets/ec9aaebb.gif" />
            <!-- <img src="./assets/logo.png" /> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script>
export default {
  name: "App",
  data() {
    return {
      navbar: [
        { idd: "A", p: "A訂單作業檔" },
        { idd: "B", p: "B紗料作業檔" },
        { idd: "C", p: "C布匹作業檔" },
        { idd: "D", p: "D應收帳款作業檔" },
        { idd: "E", p: "E盤點作業檔" },
        { idd: "F", p: "F報表分析檔" },
        { idd: "G", p: "G基本主檔" },
        { idd: "H", p: "H其他資料檔" }
      ],
      Sidebar: [
        { idd: "A", p: "訂單作業檔" },
        { idd: "A", p: "訂單明細(合格/出貨)" },
        { idd: "A", p: "訂單總明細表" },
        { idd: "A", p: "紗料需求明細" },
        { idd: "A", p: "訂單未生產明細" },
        { idd: "B", p: "入紗單作業檔" },
        { idd: "B", p: "轉紗單作業檔" },
        { idd: "B", p: "紗料存貨主檔" },
        { idd: "B", p: "月份紗料庫存報表" },
        { idd: "C", p: "生產作業檔" },
        { idd: "C", p: "品管作業檔" },
        { idd: "C", p: "選擇出貨檔" },
        { idd: "C", p: "出貨作業檔" },
        { idd: "C", p: "出貨單列印" },
        { idd: "C", p: "退貨作業檔" },
        { idd: "C", p: "選擇出貨刪" },
        { idd: "C", p: "品管特殊處理" },
        { idd: "D", p: "收款作業主檔" },
        { idd: "D", p: "出退貨收款作業" },
        { idd: "D", p: "出退貨收款作業(單一客戶)" },
        { idd: "D", p: "月份紗了結轉作業" },
        { idd: "D", p: "請款單-入/轉紗明細" },
        { idd: "D", p: "請款單-出/退貨明細" },
        { idd: "D", p: "請款單-出貨品明細" },
        { idd: "D", p: "請款單列印" },
        { idd: "D", p: "應收帳款列印" },
        { idd: "E", p: "紗料盤點單" },
        { idd: "E", p: "成品盤點單" },
        { idd: "E", p: "成品庫存明細表" },
        { idd: "F", p: "員工生產日報表" },
        { idd: "F", p: "機器生產日報表" },
        { idd: "F", p: "班別生產月報表" },
        { idd: "F", p: "員工生產月報表" },
        { idd: "F", p: "機器生產月報表" },
        { idd: "F", p: "整廠生產月報表" },
        { idd: "G", p: "客戶編號設定檔" },
        { idd: "G", p: "人事編號設定檔" },
        { idd: "G", p: "班別編號設定檔" },
        { idd: "G", p: "顏色編號設定檔" },
        { idd: "H", p: "訂單入紗(待入)檔" },
        { idd: "H", p: "布號---累計檔" },
        { idd: "H", p: "訂單序-紗種檔" },
        { idd: "H", p: "訂單-紗種明細" }
      ]
    };
  },
  computed: {
    password: function() {
      console.log(this.navbar.idd, this.Sidebar.idd);
      if (this.navbar.idd == this.Sidebar.idd) {
        return this.Sidebar.p;
      } else return "no";
    }
  }
};

$(function() {
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
  $(window).resize(function(e) {
    if ($(window).width() <= 700) {
      $("#wrapper").removeClass("toggled");
    } else {
      $("#wrapper").addClass("toggled");
    }
  });
});
</script>

<style>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

body {
  background: lightgray;
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}

.navbar-default .navbar-nav #user-profile {
  height: 100px;
  padding-top: 15px;
  padding-left: 58px;
}

.navbar-default .navbar-nav #user-profile img {
  height: 45px;
  width: 45px;
  position: absolute;
  top: 2px;
  left: 8px;
  padding: 1px;
}

#wrapper {
  padding-top: 50px;
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

@media (min-width: 992px) {
  #wrapper {
    padding-left: 225px;
  }
}

@media (min-width: 992px) {
  #wrapper #sidebar-wrapper {
    width: 225px;
  }
}

#sidebar-wrapper {
  border-right: 1px solid #250505;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 225px;
  width: 0;
  height: 100%;
  margin-left: -225px;
  overflow-y: auto;
  background: #245682;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#sidebar-wrapper .sidebar-nav {
  position: absolute;
  top: 0;
  width: 225px;
  font-size: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

#sidebar-wrapper .sidebar-nav li {
  text-indent: 0;
  line-height: 45px;
}

.sidebar-nav li a {
  background: #245682 !important;
  color: #fff !important;
}
/*
.sidebar-nav li:first-child a {
  background: #245682 !important;
  color: #fff !important;
}

.sidebar-nav li:nth-child(2) a {
  background: #6aa3d5 !important;
  color: #fff !important;
}

.sidebar-nav li:nth-child(3) a {
  background: #428bca !important;
  color: #fff !important;
}

.sidebar-nav li:nth-child(4) a {
  background: #3071a9 !important;
  color: #fff !important;
}

.sidebar-nav li:nth-child(5) a {
  background: #245682 !important;
  color: #fff !important;
} */
</style>;
