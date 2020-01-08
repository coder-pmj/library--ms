<template>
  <el-row class="main">
    <el-col class="left" :span="4">
      <app-nav />
    </el-col>
    <el-col class="right" :span="20">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppNav from "./AppNav.vue";
@Component({
  components: {
    AppNav
  }
})
export default class AppMain extends Vue {}
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;

  .left {
    height: 100%;
    background-color: white;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .right {
    overflow-y: scroll;
    height: 100%;
    padding: 12px 12px 12px 12px;
    word-wrap: break-word;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media screen and(max-width:1200px) {
  .left {
    display: none;
  }
  .right {
    width: 100%;
  }
}
</style>