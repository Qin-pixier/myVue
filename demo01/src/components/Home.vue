<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <BreadcrumbVue/>
          <div class="cont">
            <router-view> </router-view>
          </div>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import BreadcrumbVue from "./common/Breadcrumb.vue";
export default {
  name: "HelloWorld",
  components: {
    Header,
    Footer,
    Menu,
    BreadcrumbVue
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont{
      margin: 20px 0;
    }
  }

}

</style>
