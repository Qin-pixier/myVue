<template>
    <div class="data-view">
        <el-card>
            <div id="main1"></div>
        </el-card>
        <el-card>
            <div id="main2"></div>
        </el-card>
    </div>
</template>
<script>
import {dataview} from '../../api/api'
export default{
    data(){
        return {

        }
    },
    mounted(){
        let myChart = this.$echarts.init(document.getElementById("main1"));
        myChart.setOption({
            title:{
                text:'进阶版'
            },
            tooltip:{},
            xAxis:{
                data:['秦振邦','焦晓敏','秦振邦','焦晓敏']
            },
            yAxis:{},
            series:[{
                name:'人数',
                type:'line',
                data:[45,42,46,12]
            }]
        })
    },
    created(){
        dataview().then(res=>{
            console.log(res);
            if(res.data.status === 200){
                let{legend,xAxis,series} = res.data.data
                this.draw(legend,xAxis,series)
            }
        })
    },
    methods:{
        draw(legend, xAxis, series){
            let myChart = this.$echarts.init(document.getElementById('main2'))
            let option = {
                title:{
                    text:'test2',
                },
                tooltip:{
                    trigger:'axis'
                },
                legend:{
                    data:legend
                },
                xAxis:{
                    type:'category',
                    data:xAxis
                },
                yAxis:{
                    type:'value'
                },
                series:series
            }
            myChart.setOption(option)
        }
    }
}
</script>
<style lang="scss" scoped>
.data-view{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .el-card{
        width: 50%;
        #main1,#main2{
            height: 500px;
        }
    }
}
</style>