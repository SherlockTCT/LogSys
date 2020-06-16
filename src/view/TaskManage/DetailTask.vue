<template>
    <el-container>
        <el-header>
            <div class="headerTip">
                <Icon style="cursor:pointer" type="ios-arrow-dropleft-circle" size="22" color="grey" @click="backToOverview" />
               <el-select style="width:130px;" v-model="task" placeholder="当前任务">
                   <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
               </el-select>
            </div>
        </el-header>
        <el-main>
            <div class="detailBoxMain">
                <el-card v-for="(item,index) in detailTaskVal.taskLists" :key="index" class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{item.name}}</span>
                    </div>
                    <el-card v-for="(detailTaskf,index) in detailTaskCard" :key="index" class="detailTaskCard">
                        <el-checkbox>{{detailTaskf.title}}</el-checkbox>
                    </el-card>
                    <div class="detail">
                        <i class="el-icon-circle-plus-outline"></i>
                        <el-button  type="text" @click="addTask(item)">添加任务</el-button>
                    </div>
                    
                </el-card>
            </div>
        </el-main>
        <AddTask
        :dialogDis="dialogDis"
        :closeFunction="closeFunction"></AddTask>
    </el-container>
</template>
<script>
import AddTask from './children/AddTask'
export default {
    mounted(){
        this.task = this.detailTaskVal.taskName;
    },
    methods:{
        addTask(){

        },
        backToOverview(){
            EventBus.$emit('backToOverview');
        },
        addTask(){
            this.dialogDis = true;
        },
        closeFunction(){
            this.dialogDis =false;
        }
    },
    components:{
        AddTask
    },
    props:{
        detailTaskVal:{
            type:Object
        }
    },
    data(){
        return{
            task:"",
            options: [{
            value: '人才招聘',
            label: '人才招聘'
            }, {
            value: '人才培养',
            label: '人才培养'
            }],
            detailTaskCard:[
                {
                    title:"初步沟通简历"
                },
                {
                    title:"制作推荐report"
                },
                {
                    title:"由AM发给HR"
                }
            ],
            checked:"",
            dialogDis:false,
        }
    }
}
</script>
<style scoped>
    .contain{
        height: 100%;
    }
    .el-header {
        margin-left: -20px;
        margin-top: -20px;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        width: 1689px;
        line-height: 60px;
  }
  .headerTip{
      text-align: left;
  }
  .box-card{
      margin-left: 20px;
      width: 300px;
      height: 720px;
  }
  .detailBoxMain{
      height: 100%;
      display: flex;
      justify-content: flex-start;
  }
  .detailTaskCard{
      margin-top: 15px;
  }
  .detail{
      position: absolute;
      margin-top: 351px;
      cursor: pointer;
  }
</style>