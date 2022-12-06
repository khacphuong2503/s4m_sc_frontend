<template>
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer floating permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <router-link 
        v-for="item in items" 
        :key="item.title" 
        :to="item.link" 
        active-class="active"
        style="text-decoration: none; color: inherit;"
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>        
        </v-list-item>
        </router-link>

      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  components: {
  },
  methods: {

  },
  data () {
    return {
      items: [
        { title: 'System Connections', link: "/application/settings/connections", icon: 'mdi-lan' },
        { title: 'Reports & Alarms', link: "/application/settings/reports", icon: 'mdi-chart-areaspline' },
        { title: 'Images', link: "/application/settings/images", icon: 'mdi-image' },
        { title: 'Options', link: "/application/settings/options", icon: 'mdi-cog' },
        { title: 'Accounts', link: "/application/settings/accounts", icon: 'mdi-account' },
        { title: 'About', link: "/application/settings/about", icon: 'mdi-help-box' },
      ],
      right: null,
    }
  }
}
</script>

<style scoped>

</style>
