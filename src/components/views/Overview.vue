<template>
  <div class="container">
        <CardQuickData 
            overline="Memory used"
            headline="0"
            subtitle="GB"
            subtitle2="Total used"
            icon="mdi-database-outline"
            iconColor="#F3BB45"
            style="grid-column-start: 1; grid-column-end: 3;">
        </CardQuickData>
        <CardQuickData 
            overline="Profit saved"
            headline="0"
            subtitle="$"
            subtitle2="Last year"
            icon="mdi-wallet-outline"
            iconColor="#7AC29A"
            style="grid-column-start: 3; grid-column-end: 5;">
        </CardQuickData>
        <CardQuickData 
            overline="Failures"
            headline="0"
            subtitle="times"
            subtitle2="Last month"
            icon="mdi-pulse"
            iconColor="#EB5E28"
            style="grid-column-start: 5; grid-column-end: 7;">
        </CardQuickData>
        <CardQuickData 
            overline="Total machines"
            headline="0"
            subtitle="machines"
            subtitle2="In system"
            icon="mdi-engine-outline"
            iconColor="#68B3C8"
            style="grid-column-start: 7; grid-column-end: 9;">
        </CardQuickData>

        <BarChart
            :series="this.barSeries"
            :seriesColor="this.barSeriesColor"
            :labels="this.barLabels"
            :data="this.barData"
            title= "Monthly Alert Counts"
            style="grid-column-start: 1; grid-column-end: 6;">
        </BarChart>
    
        <PieChart
            :series="this.pieSeries"
            :seriesColor="this.pieSeriesColor"
            :data="this.pieData"
            title= "Monitoring Points"
            style="grid-column-start: 6; grid-column-end: 9;">
        </PieChart>

        <v-divider style="grid-column-start: 1; grid-column-end: 9"></v-divider>
        
  </div>
</template>

<script>
//import axios from 'axios'
//import store from '/src/store/store.js'
import CardQuickData from '../cards/CardQuickData.vue'
import BarChart from '../charts/BarChart.vue'
import PieChart from '../charts/PieChart.vue'

export default {
    components: {
        CardQuickData,
        BarChart,
        PieChart
    },
    methods: {

    },
    data() {
        return {
            // bar chart
            barSeries: ['Vibration', 'Electric'],
            barSeriesColor: ['#68B3C8', '#7AC29A'],
            barData: [[1,2,3,4,5,6,7,8,9,1,0,2], [2,4,1,8,2,4,1,7,10,13,5,9]],
            barLabels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            // pie chart
            pieSeries: ['Vibration', 'Electric'],
            pieSeriesColor: ['#68B3C8', '#7AC29A'],
            pieData: [78, 22],
        }
    },
    mounted() {
    },
    created() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    height: auto;
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 3fr 1fr;
    gap: 20px;
    padding: 10px;
    box-sizing: border-box;
}
</style>
