<template>
  <div class="ads">
    <v-fade-transition mode="out-in">
      <router-view channelType="ads"/>
    </v-fade-transition>
  </div>
</template>

<style scoped>
.ads {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: grid;
}
</style>