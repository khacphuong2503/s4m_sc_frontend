<template>
  <div>
    <v-menu
      transition="slide-y-transition"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          style=
            "margin: 0;
            top: 50%;
            font-size: 30px;
            color: #9a9a9a;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);">
          mdi-account-circle-outline
        </v-icon>

      </template>

      <v-list>
        <v-list-item @click.stop="onAccountSetting">
          
          <v-icon style="padding-right: 10px">mdi-account</v-icon>
          <v-list-item-title>Account settings</v-list-item-title>
        </v-list-item>
        <v-list-item @click.stop="openAddDialog">
          
          <v-icon style="padding-right: 10px">mdi-palette</v-icon>
          <v-list-item-title>Customize</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onDownload">
          
          <v-icon style="padding-right: 10px">mdi-download</v-icon>
          <v-list-item-title>Download report</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="onLogout">
          
          <v-icon style="padding-right: 10px">mdi-logout</v-icon>
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
        
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import axios from 'axios'
import store from '/src/store/store.js'

export default {
  components: {
  },
  methods: {
    onAccountSetting() {
      this.$router.push({ path: '/application/settings/accounts' })
    },
    onDownload() {
      axios.get('http://'+store.state.serverAddress+'/api/Http/CreateReport', {responseType: 'blob'})
        .then(response => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');
        
          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'file.xlsx');
          document.body.appendChild(fileLink);
        
          fileLink.click();
        })
    },
    onLogout() {
      this.$router.push({ path: '/login' })
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
