<template>
<div class="contain">
    <div v-if="view=='overview'">
        <OverViewTask></OverViewTask>
    </div>
    <div v-if="view=='detailTask'">
        <DetailTask
        :detailTaskVal="detailTaskVal"
        ></DetailTask>
    </div>
</div>
    
</template>

<script>
import OverViewTask from './OverViewTask'
import DetailTask from './DetailTask'
export default {
    mounted(){
        EventBus.$on('detailTask',this.detailTask);
        EventBus.$on('backToOverview',this.backToOverview);
    },
    components:{
        OverViewTask,
        DetailTask
    },
    data(){
        return{
            detailTaskVal:[],
            view:"overview"
        }
    },
    methods:{
        detailTask(val){
            this.view = "detailTask";
            this.detailTaskVal = val;
        },
        backToOverview(){
            this.view = "overview";
        }
    }
}
</script>

<style scoped>
    .box-card{
        margin-left: 30px;
        width: 300px;
        height: 270px;
    }
    .contain{
        height: 100%;
        display: flex;
    }
    .detail{
        position: absolute;
        margin-top: 60px;
        margin-left: 80px;
    }
</style>