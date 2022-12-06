<template>
  <div class="table-ads">
    <v-data-table
      :headers="headers"
      :items="symbols"
      :items-per-page="10"
      show-select
      style="height: 100%;"
    >
      <template v-slot:[`item.actions`]>
        <v-icon
          small
          @click="openChart()"
        >
          mdi-chart-bar
        </v-icon>
        <v-icon
          small
          @click="editItem(item)"
          style="margin-left: 5px; margin-right: 5px;"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:[`footer.prepend`]>
        <v-btn
          color="primary"
          dark
          text
          class="ma-2"
          @click="openAddSymbol = true">
            ADD
        </v-btn>
        <v-btn
          color="primary"
          dark
          text
          class="ma-2"
          @click="openEditSymbol = true">
            EDIT
        </v-btn>
      </template>
    </v-data-table>

    <BhAddSendSymbol 
      :openDialog="openAddSymbol" 
      @onAdd="onAddSymbol" 
      @onCancel="onCancelAdd">
    </BhAddSendSymbol>

  </div>
</template>

<script>
//import axios from 'axios'
//import store from '/src/store/store.js'
import BhAddSendSymbol from '../dialogs/BhAddSendSymbol.vue'

export default {
  components: {
    BhAddSendSymbol
  },
  props: {
    symbols: Array,
    reset: Boolean
  },
  watch: {
  },
  methods: {
    onAddSymbol() {
      this.$emit('onAdd')
      this.openAddSymbol = false
    },
    onCancelAdd() {
      this.openAddSymbol = false
    }
  },
  data() {
    return {
      // for table
      headers: [
        { text: 'Name', value: 'name', align: 'start', sortable: true},
        { text: 'Symbol', value: 'symbol', width: '350', sortable: true },
        { text: 'Type', value: 'type', sortable: true },
        { text: 'Size', value: 'size', sortable: true },
        { text: 'Unit', value: 'unit', sortable: true },
        { text: 'Interval', value: 'interval', sortable: true },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      //events: []
      // dialogs
      openAddSymbol: false,
    }
  },
  created() {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-events {
  height: 100%;
  display: grid;
}
::v-deep .v-data-table {
  height: 100%;
  width: 100%;
  overflow: auto;
}


</style>
