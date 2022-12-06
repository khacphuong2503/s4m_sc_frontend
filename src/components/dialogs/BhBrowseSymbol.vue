<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    fullscreen
    hide-overlay>

    <template>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Browse symbols</v-toolbar-title>
          
          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              style="float: right;"
            ></v-text-field>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-data-table
          v-model="selectSymbol"
          :headers="headers"
          :items="listSymbol"
          :items-per-page="10"
          item-key="path"
          show-select
          single-select
          :search="search"
          style="height: 100%;">
        </v-data-table>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            :disabled="selectSymbol == ''"
            @click="onOk"
          >
            OK
          </v-btn>
          <v-btn
            text
            @click="onCancel"
          >
            CANCEL
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>

  </v-dialog>

</template>

<script>
import axios from 'axios'
import store from '/src/store/store.js'

export default {
  components: {
  },
  props: {
    openDialog: Boolean,
  },
  watch: {
    openDialog: function(newVal) {
      this.dialog = newVal
    },
    // emit cancel to parent and clear table if dialog close
    dialog: function(newVal) {
      if (newVal == false) {
        this.$emit('onCancel')
      }
      // get symbols if dialog opens
      else {
        this.getListSymbol()
      }
    }
  },
  methods: {
    onOk() {
      this.$emit('onOk', this.selectSymbol[0])
    },
    onCancel() {
      this.dialog = false
      this.$emit('onCancel')
    },
    getListSymbol() {
      axios.get('http://'+store.state.serverAddress+'/api/Gateway/ListSymbolInfo')
        .then(response => (this.listSymbol = response.data, console.log(this.listSymbol)))
    }
  },

  data () {
    return {
      dialog: false,
      // symbols
      listSymbol: [],
      search: '',
      selectSymbol: '',
      // for table
      headers: [
        { text: 'Symbol', value: 'path', align: 'start', sortable: true},
        { text: 'Type', value: 'type', sortable: true, width: '350'},
        { text: 'Size (bytes)', value: 'size', sortable: true, width: '150'},
      ],
    }
  }
}
</script>

<style scoped>
.container-dialog {
  padding: 10px;
  display: grid;
  overflow: auto;
  background-color: white;
  border-radius: 10px;
  padding-top: 0;
}
.content {
  padding-left: 10px;
  padding-right: 10px;
}

::v-deep .v-toolbar .v-input{
  padding-top: 10px;
  margin-top: none;
}
</style>
