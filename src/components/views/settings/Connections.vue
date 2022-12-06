<template>
  <div class="container-connections">
    <div class="wrap-ipc" v-for="ipc in ipcCards" :key="ipc.title">
      <div class="ipc" :id="ipc.id" @click="onClick">
          <CardIpc
              :title = "ipc.title"
              img = "require('@src/assets/img/controllers/CX5130.jpg')"
              :status = "ipc.status">
          </CardIpc>
      </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios'
import store from '/src/store/store.js'
import CardIpc from '../../cards/CardIpc.vue'

export default {
  components: {
    CardIpc
  },
  methods: {
    loadIpcCards() {
    // get IPC data from DB
    axios.get('http://'+store.state.serverAddress+'/api/Http/ListIPC')
      .then(response => (
        this.listIpc = new Array(),
        this.listIpc = response.data,
        this.loadCardData(this.listIpc) ))
    },
    // get data from DB and load UI
    loadCardData(listIpc) {           
      // init data for machine card
      this.ipcCards = new Array()
      for (var id = 0; id < listIpc.length; id++) {
        // check systemStatus read or not
        var status = new Number()
        if (this.ipcStatus == []) { status = 0 }
        //else { status = store.state.systemStatus[idMachine]['Overall'] }
        // push data to array for machine card
        this.ipcCards.push({
          'id': listIpc[id]['id'],
          'title': listIpc[id]['name'],
          'img': 'product-boost-cb.png',
          'status': status
        })
      }    
    }
  },
  data() {
    return {
      listIpc: [],
      ipcCards: [],
      ipcStatus: []
    }
  },
  created() {
    // load cards and update UI
    this.loadIpcCards()
  }
}
</script>

<style scope>
.container-connections {
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    box-sizing: border-box;
}
.wrap-ipc{
    height: 100%;
    width: 100%;
    padding: 10px;
}
.ipc{
    overflow: auto;
    box-shadow: 2px 2px 10px #afafaf;
    background-color: white;
}
.ipc:hover {
    -webkit-filter: drop-shadow(2px 2px 5px rgb(163, 163, 163))
                    drop-shadow(-2px 2px 5px rgb(163, 163, 163))
                    drop-shadow(2px -2px 5px rgb(163, 163, 163))
                    drop-shadow(-2px -2px 5px rgb(163, 163, 163));
    filter: drop-shadow(2px 2px 5px rgb(163, 163, 163))
            drop-shadow(-2px 2px 5px rgb(163, 163, 163))
            drop-shadow(2px -2px 5px rgb(163, 163, 163))
            drop-shadow(-2px -2px 5px rgb(163, 163, 163));
    padding: 0px;
}
.add-machine {
    margin: 10px;
    border: 7px dashed rgb(173, 173, 173);
    color: rgb(173, 173, 173);
}
.add-machine:hover {
    border-color: rgb(15, 184, 214);
    color: rgb(15, 184, 214);
}
</style>
