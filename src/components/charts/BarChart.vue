<template>
    <div class="highchart">
        <highcharts :options="chartOptions" style="width: 100%; border-radius: 4px;"></highcharts>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'

exportingInit(Highcharts)

export default {
    components: {
        highcharts: Chart,
    },
    props: {
        update: Boolean,
        //canvas: String,
        series: Array,
        seriesColor: Array,
        labels: Array,
        data: Array,
        title: String,
        xMin: Number,
        xMax: Number,
        yMin: Number,
        yMax: Number,
        xUnit: String,
        yUnit: String,
        xShow: Boolean,
        enableAnimation: {
            type: Boolean,
            default: true
        },
    },
    watch: {
        update: {
            handler() {
                this.createChart();
            }
        }
    },
    methods: {
        createChart() {
            // init series array
            var series = new Array()
            for (var id = 0; id < this.series.length; id++) {
                series.push({
                    name: this.series[id],
                    data: this.data[id],
                    color: this.seriesColor[id]
                })
            }
            // init chartOptions
            this.chartOptions = {
                chart: {
                    animation: this.enableAnimation,
                    type: 'column',
                },
                title: {
                    text: this.title,
                    style: {
                        "fontSize": "12px"
                    }
                },
                legend: {
                    enabled: true
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                    },
                },
                xAxis: {
                    type: 'category',
                    categories: this.labels,
                    min: this.xMin,
                    max: this.xMax,
                    title: {
                        enabled: true,
                        text: this.xUnit
                    },
                    labels: {
                        rotation: 0
                    }
                },
                yAxis: {
                    title: {
                        enabled: true,
                        text: this.yUnit
                    },
                    max: this.yMax,
                    stackLabels: {
                        enabled: true,
                    }
                },
                series: series,
                credits: {
                    enabled: false
                }
            }
        }
    },
    data() {
        return {
            //lineChart: null,
            //chartData: null,
            chartOptions: null,
        }
    },

    created() {
        this.createChart()
    }
};
</script>

<style scoped>

</style>