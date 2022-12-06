<template>
    <v-card
      class="mx-auto"
      max-width="344"
      outlined
      style="width: 100%; padding-left: 10px; padding-right: 10px;"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{overline}}
          </div>
          <v-list-item-title class="text-h5 mb-1">
            {{headline}}
          </v-list-item-title>
          <v-list-item-subtitle>{{subtitle}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
        ><v-icon size="60" :color="iconColor">{{icon}}</v-icon></v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          {{subtitle2}}
        </v-list-item-content>
      </v-list-item>

    </v-card>
</template>

<script>

export default {
  components: {
  },
  props: {
    overline: String,
    headline: String,
    subtitle: String,
    subtitle2: String,
    icon: String,
    iconColor: String,
  },
  methods: {

  },
}
</script>

<style scope>
</style>