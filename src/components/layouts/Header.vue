<template>
    <div class="header">
        <v-btn class="btn-sidebar"
            elevation="0"
            fab
            dark
            small
            color="#212120"
            @click="$emit('pinSidebar')"
            >
            <v-icon dark>
                mdi-format-list-bulleted
            </v-icon>
        </v-btn>

        <h1>Connectivity Gateway</h1>

        <p></p>

        <div class="account">
            <AccountMenu style="            
              height: 100%;"
            />
        </div>
    </div>
</template>

<script>
//import store from '/src/store/store.js'
import AccountMenu from '../menus/AccountMenu.vue'

export default {
  components: {
    AccountMenu
  },
  props: {},
  methods: {
  },

  created() {
  },
  data() {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Add a black background color to the top navigation */
.header {
    background-color: #F4F3EF;
    margin:0px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 80px 200px 1fr 40px 40px;
}

.btn-sidebar {
    margin: 0;
    position: relative;
    top: 50%;
    left: 10px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

h1 {
    font-size: 18px;
    color: #6e6e6e;
    line-height: 10px;
    padding: 20px 0;
}
  
/* Style the links inside the navigation bar */
.header .button {
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
    font-family: Helvetica;
    height: 100%;
}

/* Change the color of links on hover */
.header .button:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.header .active a {
    background-color: rgb(15, 184, 214);
    color: white;
}

.header .account {
    float: right;
    height: 48px;
    color: white;
    padding-right: 30px;
    grid-column-start: 5;
}

.header .account v-icon {
    margin: 0;
    position: relative;
    top: 43%;
    left: 15%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 30px;
}
</style>
