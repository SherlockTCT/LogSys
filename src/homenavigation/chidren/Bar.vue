<template>
    <div class="contain">
  <el-col :span="24">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#fff"
        text-color="black"
        router= true
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <div class="nav">
                    <i class="el-icon-location"></i>
                    <span>我的任务</span>
                </div>
            </template>
            <el-menu-item-group>
            <el-menu-item index="/TaskManage">任务概览</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
            <div class="nav">
                <i class="el-icon-menu"></i>
                <span slot="title">我的任务组</span>
            </div>
        </el-menu-item>
        </el-menu>
    </el-col>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
    .contain{
        height: 800px;
    }
    .nav{
        margin-left: -120px;
    }
</style>