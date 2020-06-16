<template>
<div class="contain">
    <el-card class="box-card" v-for="item in taskList" :key="item.key">
        <div slot="header" class="clearfix">
        <span>{{item.taskName}}</span>
    </div>
    <div v-for="(tasks,index) in item.taskLists" :key="index" class="text item">
        {{tasks.name}}
    </div>
    <el-button class="detail" type="text" @click="detail(item)">查看详情</el-button>
</el-card>
</div>
    
</template>

<script>
export default {
    mounted(){
    },
    data(){
        return{
            taskList:[{
                key:1,
                taskName:"人才招聘",
                taskLists:[{name:"筛选简历"},{name:"安排初试"},{name:"安排复试"},{name:"Offer发放"}]
            },
            {
                key:2,
                taskName:"人才培养",
                taskLists:[{name:"筛选简历"},{name:"安排初试"},{name:"安排复试"},{name:"Offer发放"}]
            }]
        }
    },
    methods:{
        detail(val){
            EventBus.$emit('detailTask',val);
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