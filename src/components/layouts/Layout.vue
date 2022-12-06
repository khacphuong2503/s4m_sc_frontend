<template>
  <div class="layout">
    <SideBar :isPinned="isPinned"/>

    <div class="mainView">
      <Header @pinSidebar="onPinSidebar"/>
      <v-divider/>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    
  </div>
</template>

<script>
import Header from './Header.vue'
import SideBar from './SideBar.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    SideBar
  },
  props: {},
  methods: {
    onPinSidebar() {
      this.isPinned = !this.isPinned
    }
  },

  data() {
    return {
      isPinned: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  height: 100vh;
  width: 100%;
  overflow: auto;
  display: grid;
}
.mainView {
  background: rgb(231, 231, 231);
  height: 100%;
  width: auto;
  overflow: auto;
  display: grid;
  grid-template-rows: 50px 1px 1fr;
}
</style>
