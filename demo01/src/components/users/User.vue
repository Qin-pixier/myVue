<template>
  <div class="user">
    <el-tree
      :data="menus"
      show-checkbox
      node-key="name"
      :props="defaultProps"
      ref="tree"
    >
    </el-tree>
    <el-button @click="getCheckedNodes">通过Node获取</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [],
      defaultProps: {
        label: "name",
        children: "children",
      },
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
  },
  methods: {
    getCheckedNodes() {
    //   let arr = this.$refs.tree.getCheckedNodes();
    },
  },
};
</script>