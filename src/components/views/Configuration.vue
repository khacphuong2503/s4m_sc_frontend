<template>
  <div class="container-config">
    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <div class="panel-header">
            <img src="@/assets/img/controllers/CX5130.jpg" width="100%"/>
            <div class="panel-text">
              <h2>IPC 01</h2>
              <table>
                <tr>
                  <td class="field">IP address</td>
                  <td class="value">192.168.1.10</td>
                </tr>
                <tr>
                  <td class="field">AmsNetID</td>
                  <td class="value">192.168.1.10.1.1</td>
                </tr>
                <tr>
                  <td class="field">AmsNetPort</td>
                  <td class="value">851</td>
                </tr>
              </table>

              <table>
                <tr>
                  <td class="field">Total data</td>
                  <td class="value">75</td>
                </tr>
                <tr>
                  <td class="field">Response time</td>
                  <td class="value">224 ms</td>
                </tr>
                <tr>
                  <td class="field">Status</td>
                  <td class="value">$80</td>
                </tr>
              </table>
                
            </div>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-tabs v-model="tab">
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
          <AdsReceiveSymbols v-if="tab==0"
            :symbols="this.listReceiveSymbol"
            @onAdd="onAddReceiveSymbol"
          ></AdsReceiveSymbols>
          <AdsSendSymbols v-if="tab==1"
            :symbols="this.listSendSymbol"
            @onAdd="onAddSendSymbol"
          ></AdsSendSymbols>
        </v-expansion-panel-content>
      </v-expansion-panel>

      

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 2</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-alert
      :value="alert"
      type="success"
      transition="scroll-y-transition"
      style="
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 10;"
    >
      Successfully added new symbol
    </v-alert>

  </div>
</template>

<script>
import axios from 'axios'
import store from '/src/store/store.js'
import AdsReceiveSymbols from '../tables/AdsReceiveSymbols.vue'
import AdsSendSymbols from '../tables/AdsSendSymbols.vue'

export default {
  components: {
    AdsReceiveSymbols,
    AdsSendSymbols
  },
  props: {
    channelType: String
  },

  watch: {
    alert: function(newVal) {
      if(newVal){
        setTimeout(()=>{this.alert=false},5000)
      }
    },
    tab: function(newVal) {
      // Receive
      if (newVal == 0) {
        this.getListReceiveSymbolIpc('6229be15e0664a60fcd80000')
      }
      // Send
      else if (newVal == 1) {
        this.getListSendSymbolIpc('6229be15e0664a60fcd80000')
      }
    }
  },

  methods: {
    onAddReceiveSymbol() {
      this.getListReceiveSymbolIpc('6229be15e0664a60fcd80000')
      this.alert = true
    },
    onAddSendSymbol() {
      this.getListSendSymbolIpc('6229be15e0664a60fcd80000')
      this.alert = true
    },
    getListReceiveSymbolIpc(idIPC) {
      axios.get('http://'+store.state.serverAddress+'/api/Gateway/ListReceiveSymbol/' + idIPC)
        .then(response => ( this.listReceiveSymbol = response.data ))
    },
    getListSendSymbolIpc(idIPC) {
      axios.get('http://'+store.state.serverAddress+'/api/Gateway/ListSendSymbol/' + idIPC)
        .then(response => ( this.listSendSymbol = response.data ))
    }
  },

  created() {
    this.getListReceiveSymbolIpc('6229be15e0664a60fcd80000')
  },

  data() {
    return {
      // list symbol by IPC
      listReceiveSymbol: [],
      listSendSymbol: [],
      // alert popup
      alert: false,
      // tab
      tab: 0,
      items: ['Receive', 'Send', 'Equation'],
    }
  },
}
</script>

<style scoped>
.container-config {
  padding: 10px;
}

.panel-header {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 40px;
}

.panel-text {
  width: 70%;
  min-width: 500px;;
  display: grid;
  grid-template-rows: 20px 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
h2 {
  grid-column-start: 1;
  grid-column-end: 3;
}

</style>