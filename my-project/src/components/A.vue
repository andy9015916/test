<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="form-group">
      <label>輸入資料:</label>
      <input type="text" name v-model="newitems.name" @keyup.enter="entt" />
    </div>
    <div class="form-group">
      <label>age:</label>
      <input type="text" name v-model="newitems.age" @keyup.enter="entt" />
    </div>
    <div class="form-group">
      <label>sex:</label>
      <select v-model="newitems.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div class="form-group">
      <label></label>
      <button v-on:click="addPerson">Create</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <!--v-for-->
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="deletePerson($index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      newitems: {
        name: "",
        age: "18",
        sex: "女"
      }, //newitems預設的
      items: [
        {
          name: "lily",
          age: 18,
          sex: "女"
        }
      ]
    };
  },
  methods: {
    entt: function() {
      this.items.push(this.newitems); //往items中新增newitems
      this.newitems = { name: "", age: "18", sex: "女" };
    }, //新增元素
    addPerson: function() {
      this.items.push(this.newitems); //往items中新增newitems
      this.newitems = { name: "", age: "18", sex: "女" };
    }, //新增元素
    deletePerson: function(index) {
      // 刪一個數組元素
      this.items.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
