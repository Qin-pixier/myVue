<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通用后台管理系统</span>
            </div>
            <el-form 
            label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username" >
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" >
                    <el-input type="password" v-model="form.password" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>    
                    <el-button type="primary" @click="login('form')">登录</el-button>  
                </el-form-item>
            </el-form>
        </el-card>
       
    </div>
</template>
<script>
    import {nameRule, passRule} from '../utils/validate'
    import {setToken} from '@/utils/setToken'
    import {login} from '../api/api'
    export default{
        data(){
            
            return{
                rules:{
                    username:[
                    {validator:nameRule,trigger:'blur'},
                ],
                    password:[
                    {validator:passRule,trigger:'blur'},
                ]
                },
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            login(form){
                this.$refs[form].validate((valid) =>{
                    if(valid){
                        console.log(this.form);
                        login(this.form).then(res=>{
                            if(res.data.status === 200){
                                setToken('username',res.data.username)
                                setToken('token',res.data.token)
                                this.$message({message:res.data.message,type:'success'})
                                this.$router.push('/home')
                            }
                        })
                    }
                    else{
                        console.error(this.form)
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
.login{
    width:100%;
    height: 100%;
    position: absolute;
    background: #409EFF;
    .el-card{
        background: #65768557;
    }
    .box-card{
        color:#fff;
        width: 450px;
        margin: 200px auto;
        .el-form .el-form-item__label{
            color:#fff;
        }
        .el-button{
            width: 100%;
        }
        .el-card__header{
            font-size: 34px;
        }
    }
}

</style>