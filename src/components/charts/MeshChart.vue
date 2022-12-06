<template>
    <div class="highchart">
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import Highcharts3d from 'highcharts/highcharts-3d'

exportingInit(Highcharts)
Highcharts3d(Highcharts)

export default {
    components: {
        highcharts: Chart,
    },
    props: {
        update: Boolean,
        title: String,
        canvas: String,
        data: Array
    },
    watch: {
        update: function() {
            this.createChart();
        }
    },
    methods: {
        createChart() {
            // process data array
            var series = this.processData(this.data)
            // init chartOptions
            this.chartOptions = {
                chart: {
                    type: 'area',
                    zoomType: 'x',
                    options3d: {
                        enabled: true,
                        alpha: 10,
                        beta: 0,
                        depth: 250,
                        viewDistance: 5,
                        fitToPlot: false,
                    }
                },
                title: {
                    text: this.title,
                    style: {
                        "fontSize": "12px"
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        depth: 20,
                        marker: {
                            enabled: false
                        },
                        states: {
                            inactive: {
                                enabled: false
                            }
                        }
                    },
                },
                xAxis: {
                    type: 'category',
                    categories: this.labels,
                    zoomEnabled: true,
                    title: {
                        enabled: true,
                        text: 'Hz'
                    }
                },
                yAxis: {
                    title: {
                        enabled: true,
                        text: this.yUnit
                    }
                },
                series: series,
                credits: {
                    enabled: false
                }
            }
        },
        processData(dataArray) {
            var series = []
            for (var idArray = 0; idArray < 20; idArray++) {
                series.push({
                    name: idArray,
                    data: dataArray[idArray],
                    lineWidth: 0.5,
                    lineColor: 'rgb(180,90,50)',
                    color: 'rgb(180,90,50)',
                    fillColor: null,
                    fillOpacity: 0
                })
            }  
            return series;
        }
    },

    data() {
        return {
            chartOptions: null,
        }
    },

    created() {
        this.createChart()
    }
};
</script>

<style scoped>
.highchart {
    height: 100%;
    width: 100%;
    display: grid;
}
</style>