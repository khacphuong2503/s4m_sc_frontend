<template>
  <v-navigation-drawer 
    app :key="isPinned" 
    :expand-on-hover="!isPinned" 
    :mini-variant="!isPinned" 
    permanent 
    dark
    clipped width="280" 
    mini-variant-width="76"
    color="#212120"
    style="padding: 10px;">

    <v-list-item >
      <v-list-item-avatar>
        <v-img src="@/assets/logo/s4m_logo.png"></v-img>
      </v-list-item-avatar> 
      <v-list-item-title>S4M Engineering</v-list-item-title>
    </v-list-item>

    <v-divider style="border-color: #616161;"></v-divider>

    <v-list >
      <v-list-item
        @click="$router.push({ path: overview.route })"
        link>
        <v-list-item-icon>
          <v-icon>{{overview.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{overview.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      
      <v-list-group
        v-for="group in groups"
        :key="group.title"
        v-model="group.active"
        :prepend-icon="group.icon"
        no-action>

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="group.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <div>
          <v-list-item
            v-for="item in itemsChannel"
            :key="item.title"
            @click="$router.push({ path: '/application/' + group.name + item.route })"
            link>
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list-group>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{events.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{events.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item 
        link 
        @click="$router.push({ path: settings.route })">
        <v-list-item-icon>
          <v-icon>{{settings.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{settings.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>

<script>

export default {
  components: {
  },
  props: {
    isPinned: Boolean
  },
  methods: {
    onClickLayout() {
      this.$router.push({ path: '/application/vibration/layout' })
    },
    onClickMachines() {
      this.$router.push({ path: '/application/vibration/machines' })
    },
    onClickMeasPoint() {
      this.$router.push({ path: '/application/vibration/measpoints' })
    },
    onClickAlarm() {
      this.$router.push({ path: '/application/vibration/alarms' })
    },
  },

  data() {
    return {
      groups: [
        { name: 'beckhoff', title: 'BECKHOFF', icon: 'mdi-lan' },
        { name: 'rockwell', title: 'ROCKWELL', icon: 'mdi-lan' },
        { name: 'siemens', title: 'SIEMENS', icon: 'mdi-lan' },
        { name: 'modbus-tcp', title: 'MODBUS TCP', icon: 'mdi-chart-line-variant' },
        { name: 'modbus-rtu', title: 'MODBUS RTU', icon: 'mdi-chart-line-variant' },
        { name: 'analog', title: 'ANALOG', icon: 'mdi-chart-line-variant' },
        { name: 'digital', title: 'DIGITAL', icon: 'mdi-chart-line-variant' },
      ],
      itemsChannel: [
        { title: 'Layout', icon: 'mdi-alpha-l', route: "/layout" },
        { title: 'Configurations', icon: 'mdi-alpha-c', route: "/config" },
      ],
      overview: {title: 'OVERVIEW', icon: 'mdi-home-outline', route: "/application/overview"},
      events: {title: 'EVENTS', icon: 'mdi-clock-alert-outline', route: "/application/overview"},
      settings: {title: 'SETTINGS', icon: 'mdi-cog-outline', route: "/application/settings"},
      //navBarPinned: false,
    }
  }
}
</script>

<style scoped>
</style>