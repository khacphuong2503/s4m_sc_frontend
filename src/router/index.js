import Vue from 'vue'
import Router from 'vue-router'

// ------ LAYOUT ------
import Layout from '../components/layouts/Layout.vue'
import Login from '../components/views/Login.vue'
// ----- OVERVIEW -----
import Overview from '../components/views/Overview.vue'
// ------ VIEWS ------
import Beckhoff from '../components/views/channels/Beckhoff.vue'
import Configuration from '../components/views/Configuration.vue'
import Settings from '../components/views/Settings.vue'

// ------ SETTINGS -----
import Connections from '../components/views/settings/Connections.vue'
//mport Reports from '../components/views/settings/Reports.vue'
//import Images from '../components/views/settings/Images.vue'
//import Options from '../components/views/settings/Options.vue'
//import Accounts from '../components/views/settings/Accounts.vue'
import About from '../components/views/settings/About.vue'

Vue.use(Router)

export default new Router ({
  routes: [ 
    { path: '', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/application', component: Layout, children: [
      { path: '', redirect: 'overview'},
      { path: 'overview', component: Overview},
      { path: 'beckhoff', component: Beckhoff, children: [
        //{ path: 'layout', component: VbrPlantLayout },
        { path: 'config', component: Configuration },
      ]},
      { path: 'modbus-tcp', component: Settings, children: [
        //{ path: 'layout', component: VbrPlantLayout },
        { path: 'config', component: Configuration },
      ]},
      { path: 'modbus-rtu', component: Settings, children: [
        //{ path: 'layout', component: VbrPlantLayout },
        { path: 'config', component: Configuration },
      ]},
      { path: 'analog', component: Settings, children: [
        //{ path: 'layout', component: VbrPlantLayout },
        { path: 'config', component: Configuration },
      ]},
      { path: 'digital', component: Settings, children: [
        { path: '', redirect: 'connections'},
        { path: 'connections', component: Connections},
        //{ path: 'reports', component: Reports},
        //{ path: 'images', component: Images},
        //{ path: 'options', component: Options},
        //{ path: 'accounts', component: Accounts},
        { path: 'about', component: About}
      ]}
    ]}
  ]
})
