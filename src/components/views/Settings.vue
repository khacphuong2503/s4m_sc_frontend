<template>
  <div class="container">
    <SettingNavigation style="width: 100%;"/>
    
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>

  </div>
</template>

<script>
import SettingNavigation from '../views/settings/SettingNavigation.vue'

export default {
  components: {
    SettingNavigation
  },
  props: {},
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 20px;
  padding: 10px;
  box-sizing: border-box;
}

.wrap-settings {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>