<template>
    <div class="contain">
        <div class="NavIcon">

        </div>
        <Menu style="width:500px;margin-left:900px;" mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="ios-paper" />
                我的任务
            </MenuItem>
            <MenuItem name="2">
                <Icon type="ios-people" />
                任务组管理
            </MenuItem>
        </Menu>
        <div class="login">
            <span class="ivu-avatar ivu-avatar-circle ivu-avatar-icon ivu-avatar-default">
            <i class="ivu-icon ivu-icon-ios-person">
                
            </i>
            </span>
            <Button type="text">登录</Button>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>

<style scoped>
    .contain{
        width:1920px;
        margin-left: -19px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    }
    .NavIcon{
        width: 230px;
        background: #fff;  
    }
    .login{
        margin-top: 15px;
    }
</style>