<template>
  <el-menu :default-active="currentPath" class="el-menu-vertical-demo" router>
    <template v-for="it in menu">
      <el-menu-item v-if="!it.ItemGroup" :key="it.id" :index="it.path">
        <i :class="it.icon"></i>
        <span>{{it.title}}</span>
      </el-menu-item>

      <el-submenu v-else :key="it.id" :index="it.path">
        <template #title>
          <i :class="it.icon"></i>
          <span>{{it.title}}</span>
        </template>
        <el-menu-item-group v-for="its in it.ItemGroup" :key="its.id">
          <template #title>{{its.title}}</template>
          <el-menu-item
            v-for="itss in its.menuItem"
            :key="itss.id"
            :index="itss.path"
          >{{itss.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class AppNav extends Vue {
  /* 导航栏 */
  private menu: Array<any> = [
    {
      id: 1,
      path: "/index",
      icon: "el-icon-document",
      title: "首页"
    },
    {
      id: 2,
      path: "/category",
      icon: "el-icon-s-unfold",
      title: "书籍分类",
      ItemGroup: [
        {
          id: 1,
          title: "工科",
          menuItem: [
            {
              id: 1,
              path: "/category/computer",
              title: "计算机"
            },
            {
              id: 2,
              path: "/category/machine",
              title: "机械制造"
            }
          ]
        },
        {
          id: 2,
          title: "理科",
          menuItem: [
            {
              id: 1,
              path: "/category/physics",
              title: "物理"
            }
          ]
        },
        {
          id: 3,
          title: "文史",
          menuItem: [
            {
              id: 1,
              path: "/category/english",
              title: "英语"
            },
            {
              id: 2,
              path: "/category/french",
              title: "法语"
            },
            {
              id: 3,
              path: "/category/history",
              title: "历史"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      path: "/connadmin",
      icon: "el-icon-user-solid",
      title: "联系管理员"
    }
  ];
  private currentPath: string = "/index";
  created() {
    this.currentPath = this.$route.path;
  }
  @Watch("$route")
  w(v: any) {
    if (v.path === "/category/searchresult") {
      this.currentPath = "/";
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>