<template>
    <div class="highchart">
        <highcharts :options="chartOptions"></highcharts>
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
        labels: Array,
        data: Array,
        xMin: Number,
        xMax: Number,
        yMin: Number,
        yMax: Number,
        color: String,
        title: String,
        xUnit: String,
        yUnit: String,
        //xShow: Boolean,
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
            this.chartOptions = {
                chart: {
                    animation: this.enableAnimation,
                    type: 'line',
                    zoomType: 'x'
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
                    line: {
                        marker: {
                            enabled: false
                        },
                        lineWidth: 1
                    },
                    series: {
                        color: this.color
                    }
                },
                xAxis: {
                    type: 'category',
                    categories: this.labels,
                    zoomEnabled: true,
                    min: this.xMin,
                    max: this.xMax,
                    title: {
                        enabled: true,
                        text: this.xUnit
                    },
                    labels: {
                        //autoRotation: -45
                    }
                },
                yAxis: {
                    title: {
                        enabled: true,
                        text: this.yUnit
                    },
                    max: this.yMax
                },
                series: [{
                    groupPadding: 0,
                    name: this.title,
                    data: this.data
                }],
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
.highchart {
    height: 100%;
    width: 100%;
    display: grid;
}
</style>