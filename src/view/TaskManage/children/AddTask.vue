<template>
    <el-dialog
            :visible.sync="showDis"
            width="70%"
            style="margin-top:-6%;"
            :close-on-click-modal="false"
            >
            <template slot="title"> 
             <div class='titleZise'>
                <div class="titleBox">
                    <font class="titleFont">添加任务</font>
                </div>    
            </div>
            <div class="tip">
               <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="任务名称">
                    <div class="selectP">
                    <el-input style="width:85%" v-model="formLabelAlign.region"></el-input>
                    <el-select style="width:150px;margin-left:33px;" v-model="taskGroupName" placeholder="选择任务组">
                   <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                     </el-select>
                     </div>
                </el-form-item>
                <el-form-item label="选择组员">
                    <div class="selectP">
                        <el-input v-model="formLabelAlign.region" style="width:85%"></el-input>
                        <el-button type="primary" style="margin-left:33px;width:150px;" @click="selectPepole">选择组员</el-button>
                    </div>
                </el-form-item>
              <el-form-item label="任务内容">
                  <quilEditor></quilEditor>
                </el-form-item>
            </el-form>
             <p>发送人：XXX</p>
            </div>
        </template>
            <span slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="deleteData">添 加</el-button>
        </span>
        
        <el-transfer
            v-if="transDis"
            style="text-align: left; display: inline-block"
            v-model="value"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :render-content="renderFunc"
            :titles="['所有组员', '任务分配']"
            :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
            }"
            @change="handleChange"
            :data="data"></el-transfer>
    </el-dialog>
</template>

<script>
import quilEditor from '@/components/quilEditor'
export default {
    props:{
        deleteFunction: Function,
        dialogDis:Boolean,
        closeFunction:Function
    },
    data(){
         const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 5; i++) {
            data.push({
                key: i,
                label: `组员 ${ i }`
            });
            }
            return data;
        };
        return{
            data: generateData(),
            value: [1, 5],
            showDis:false,
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            transDis:false,
            options: [{
            value: '任务组1',
            label: '任务组1'
            }, {
            value: '任务组2',
            label: '任务组2'
            }],
            taskGroupName:""
        }
    },
    components:{
        quilEditor
    },
    methods:{
        deleteData(){
            this.deleteFunction();
            this.dialogDis = false;
        },
        close(){
            this.showDis = false;
            this.closeFunction();
        },
        selectPepole(){
            this.transDis = !this.transDis;
        }
    },
    watch:{
        dialogDis(newVal,oldVal){
            this.showDis = newVal;
        },
        showDis(newVal,oldVal){
            if(!newVal){
                this.closeFunction();
            }
        }
    }
}
</script>

<style scoped>
    .titleFont{
            text-align: left;
            width:112px;
            height:14px;
            font-size:14px;
            font-family:FZLTZHJW;
            font-weight:normal;
            color:rgba(102,102,102,1);
            line-height:64px;
    }
    .titleZise{
        width:1334px;
        height:50px;
        margin-top: -20px;
        margin-left: -20px;
        background:rgba(240,240,240,1);
        border:1px solid rgba(210,210,210,1);
        opacity:0.8;
    }
    .titleBox{
         width:100px;
         text-align: left;
         margin-left: 18px;
         margin-top: -2px;
    }
    .tip{
        height:700px;
        padding-top: 30px;
    }
    .tipFont{
        width:133px;
        height:12px;
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:64px;
    }
    .selectP{
        display: flex;
        height: 100%;
        justify-content: flex-start;
    }
</style>