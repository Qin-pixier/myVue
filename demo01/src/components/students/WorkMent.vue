<template>
    <div class="workMent">
      <el-table :data="tableData" v-loading="loading" border style="width: 100%">
        <el-table-column prop="id" label="用户ID" align="center">
        </el-table-column>
        <el-table-column prop="userId" label="所属班级" align="center">
        </el-table-column>
        <el-table-column prop="title" label="作业名称" align="center">
        </el-table-column>
        <el-table-column
          prop="completed_text"
          label="作业完成情况"
          align="center"
        >
        </el-table-column>
      </el-table>
     <PageingVue
     :total="total" :url="url"/>
    </div>
  </template>
  <script>
  import PageingVue from '../common/Pageing.vue';
  export default {
    components:{
        PageingVue
    },
    data() {
      return {
        total: 0,
        tableData: [],
        loading: true,
        url:'/works'
      };
    },
    
  };
  </script>
  <style lang = 'scss'>
  .workMent {
    .el-pagination {
      text-align: left;
      margin-top: 20px;
    }
  }
  </style>