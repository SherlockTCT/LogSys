<template>
    <el-container>
        <el-header>
            <Nav/>
        </el-header>
        <el-container>
            <el-aside width="230px">
                <Bar></Bar>
            </el-aside>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Bar from './chidren/Bar'
import Main from './chidren/Main'
import Nav from './chidren/Nav'
export default {
    components:{
        Bar,
        Main,
        Nav
    }
}
</script>
<style scoped>
    .el-header{
    margin-top: -3%;
    background: #fff;    
    color: #333;
    text-align: center;
    line-height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  
  .el-aside {
    text-align: center;
    height: 855px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 855px;
  }
  body > .el-container {
    width: 1920px;
    height: 1080px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>