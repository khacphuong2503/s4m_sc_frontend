<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="400">

    <template>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Add new send symbol</v-toolbar-title>
        </v-toolbar>

        <v-text-field class="content"
          v-model="symbolName"
          label="Name"
          hide-details
        ></v-text-field>

        <v-text-field class="content"
          v-model="symbolPath"
          label="Symbol"
          hide-details>
          <template v-slot:append-outer>
            <v-btn
              large
              text
              x-small
              color="primary"
              @click="onBrowse">
              Browse
            </v-btn>
          </template>
        </v-text-field>

        <v-text-field class="content"
          v-model="symbolType"
          label="Type"
          hide-details
        ></v-text-field>

        <v-text-field class="content"
          v-model="symbolSize"
          label="Size"
          hide-details
        ></v-text-field>

        <v-text-field class="content"
          v-model="symbolUnit"
          label="Unit"
          hide-details
        ></v-text-field>

        <v-text-field class="content"
          v-model="interval"
          label="Logging interval"
          suffix="s"
          hide-details
        ></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="onAdd"
          >
            ADD
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

    <BhBrowseSymbol 
      :openDialog="openBrowseSymbol" 
      @onOk="onBrowseSymbol" 
      @onCancel="onCancelBrowse">
    </BhBrowseSymbol>
  </v-dialog>

</template>

<script>
import axios from 'axios'
import store from '/src/store/store.js'
import BhBrowseSymbol from './BhBrowseSymbol.vue'

export default {
  components: {
    BhBrowseSymbol
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
    }
  },
  methods: {
    onAdd() {
      // create json query
      var postData = {
        idIPC: this.idIPC,
        name: this.symbolName,
        symbol: this.symbolPath,
        type: this.symbolType,
        size: this.symbolSize,
        unit: this.symbolUnit,
        minVal: this.minVal,
        maxVal: this.maxVal,
        interval: this.interval
      }
      // post to DB
      axios.post('http://'+store.state.serverAddress+'/api/Gateway/CreateSendSymbol', postData)
        .then(() => (this.$emit('onAdd')))
    },
    onCancel() {
      this.dialog = false
      this.machineName = null
      this.$emit('onCancel')
    },
    onBrowse() {
      this.openBrowseSymbol = true
    },
    onBrowseSymbol(symbol) {
      // assign browsed symbol to form
      this.symbolPath = symbol.path
      this.symbolType = symbol.type
      this.symbolSize = symbol.size
      // close dialog
      this.openBrowseSymbol = false
    },
    onCancelBrowse() {
      this.openBrowseSymbol = false
    },
  },

  data () {
    return {
      dialog: false,
      // browse dialog
      openBrowseSymbol: false,
      // form input
      idIPC: '6229be15e0664a60fcd80000',
      symbolName: '',
      symbolPath: '',
      symbolType: '',
      symbolSize: 0,
      symbolUnit: '',
      minVal: 0,
      maxVal: 0,
      interval: 0,
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
#checkbox-descriptions {
  padding-top: 20px;
  margin: 0;
  color: #757575;
}

::v-deep .v-input__append-outer {
  height: 0;
}
</style>
