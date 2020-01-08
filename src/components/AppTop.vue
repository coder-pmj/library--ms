<template>
  <div>
    <el-row class="top">
      <el-col class="title" :span="4" align="center">电子图书馆</el-col>

      <el-col :span="20" class="top-right">
        <el-col :span="21" class="input-wrap">
          <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入关键字检索图书"
            clearable
            size="medium"
            v-model="value"
            @keyup.native.enter="search"
          />
        </el-col>

        <el-col :span="3">
          <el-dropdown class="avatar-wrap" @command="handleCommand">
            <el-avatar class="el-dropdown-link" style="overflow:initial" :size="50">user</el-avatar>
            <el-dropdown-menu #default="dropdown">
              <el-dropdown-item command="a">个人信息</el-dropdown-item>
              <el-dropdown-item command="b">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown class="icon-wrap" trigger="click" @command="handleCommand">
            <i class="el-icon-setting el-dropdown-link" style="font-size:20px"></i>
            <el-dropdown-menu #default="dropdown">
              <el-dropdown-item command="a">个人信息</el-dropdown-item>
              <el-dropdown-item command="b">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppNav from "../components/AppNav.vue";
@Component({
  components: {
    AppNav
  }
})
export default class AppTop extends Vue {
  private value: any = "";

  search() {
    //如果检索字与上次相同，就不必再次检索
    if (this.$route.query.value === this.value) {
      return;
    }
    // console.log(this.$router)
    this.$router.push({
      path: "/category/searchresult",
      query: { value: this.value }
    });
  }
  handleCommand(v: string) {
    if (v === "a") {
      alert("个人");
    } else {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  background-color: whitesmoke;
  height: 80px;
  line-height: 80px;
  .title {
    font-weight: 800;
    font-size: 2rem;
    font-family: cursive;
    background-image: linear-gradient(to right, rgb(243, 217, 217), whitesmoke);
  }
  .el-input {
    min-width: 203px;
    max-width: 203px;
    margin-left: 20px;
  }
  .el-col {
    .el-col {
      .icon-wrap {
        display: none;
      }
    }
  }
}

@media screen and(max-width: 500px) {
  .top {
    .el-col {
      .el-col {
        .avatar-wrap {
          display: none;
        }
      }
    }
  }
  .top {
    .el-col {
      .el-col {
        .icon-wrap {
          display: inline-block;
        }
      }
    }
  }
  .top {
    .el-col {
      .input-wrap {
        text-align: center;
      }
    }
  }
}
@media screen and(max-width:1200px) {
  .top {
    .title {
      display: none;
    }
    .top-right {
      width: 100%;
    }
  }
}

@media screen and(min-width:670px) and(max-width: 1200px) {
  .top {
    .el-col {
      .el-col {
        .avatar-wrap {
          .el-avatar {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
@media screen and(min-width: 1200px) and(max-width: 1920px) {
  .top {
    .el-col {
      .el-col {
        .el-dropdown {
          .el-avatar {
            margin-left: 70px;
          }
        }
      }
    }
  }
}
@media screen and(min-width: 1920px) {
  .top {
    .el-col {
      .el-col {
        .el-dropdown {
          .el-avatar {
            margin-left: 120px;
          }
        }
      }
    }
  }
}
</style>