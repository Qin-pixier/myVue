<template>
    <div class="header">
        <el-header>
            <div class="title">通用管理系統</div>
            <div>{{name}}</div>
        </el-header>
    </div>
</template>

<script>
import {getToken} from "../../utils/setToken"
// import moduleName from 'module';
    export default{
        data(){
            return{
                name:''
            }
        },
        created(){
            this.name = getToken('username');
        }
    }
</script>
<style lang="scss" scoped>

</style>