<template>
  <div ref="wrap">
    <category-top v-if="name!=='searchresult'" :title="name|translateName" />
    <category-top v-else title="搜索结果" style="color:red" />
    <div style="margin:10px 0">
      <el-card
        :style="{margin:`10px ${x}px` }"
        class="item"
        :body-style="{ padding: '0px' }"
        v-for="it in showData"
        :key="it.id"
      >
        <img :src="it.img" class="image" />
        <div style="padding: 14px;">
          <span>{{it.title}}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">阅读</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <div
      @click="load"
      v-if="data.length>showData.length"
      ref="bottomflag"
      v-loading="loading"
      class="loading-wrap"
    >{{more}}</div>
    <div
      v-if="data.length===showData.length"
      style="width:100%;height:20px;text-align:center"
    >到底了……………</div>
    <div v-if="!data.length">暂无数据</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CategoryTop from "../components/CategoryTop.vue";
import { data } from "../mock/itemData"; //模拟数据

@Component({
  components: {
    CategoryTop
  },
  filters: {
    translateName(v: string) {
      switch (v) {
        case "computer":
          return "计算机";
        case "machine":
          return "机械制造";
        case "physics":
          return "物理";
        case "english":
          return "英语";
        case "french":
          return "法语";
        case "history":
          return "历史";
        default:
          break;
      }
    }
  }
})
export default class ShowCategory extends Vue {
  public $refs: any;
  public $route: any;
  private loading: boolean = false;
  private timer: any = null;
  private bookWidth: number = 277;
  private x: number = 0; //item的margin值
  private num: number = 0;
  private name: string = ""; //展示页的标题
  private OldData: Array<any> = data; //原数据
  private data: Array<any> = []; //过滤后数据
  private showData: Array<any> = [];
  private flag: boolean = true;
  private more: string = "点击加载更多";

  //懒加载
  private load(): void {
    if (this.data.length > this.showData.length) {
      this.loading = true;
      this.timer = setTimeout(() => {
        this.loading = false;
        //只让此处代码执行一次
        (() => {
          if (this.flag) {
            this.showData.push(
              ...this.data.slice(
                this.showData.length,
                // this.showData.length + this.num
                (Math.floor(this.showData.length / this.num) + 1) * this.num
              )
            );
            this.flag = false;
          }
        })();
      }, 1500);
      this.flag = true;
    }
  }
  //created()
  private created(): void {
    this.name = this.$route.path.substr(10);
  }
  //mounted()
  private mounted(): void {
    //页面加载后，排版页面
    this.calMargin();
    window.onresize = () => {
      this.calMargin();
      this.load();
    };

    //在每次加载时回到上次用户停留的位置
    if (this.name === "searchresult") {
      this.searchData(this.$route.query.value); // 此方法 刷新页面会回到用户上次搜索的页面
      return;
    }
    this.filterData(this.name);
  }

  //性能优化
  private deactivated(): void {
    clearTimeout(this.timer);
  }
  private beforeDestroy(): void {
    clearTimeout(this.timer);
  }

  //排版页面的算法
  private calMargin(): void {
    let w = this.$refs.wrap.clientWidth - 20;
    this.num = Math.floor(w / this.bookWidth);
    this.x = (w - this.bookWidth * this.num) / this.num / 2;
  }
  //根据分类字段过滤的方法
  private filterData(name: string): void {
    this.data = this.OldData.filter(v => v.type === name);
    this.showData = this.data.slice(0, this.num * 2);
  }
  //检索数据的方法
  private searchData(value: any): void {
    this.data = this.OldData.filter(v => v.title.includes(value));
    this.showData = this.data.slice(0, this.num * 2);
  }
  @Watch("$route")
  watchRoute(to: any) {
    // console.log(to);
    if (to.path === "/category/searchresult") {
      this.name = "searchresult";
      this.searchData(to.query.value);
      return;
    }
    this.name = to.params.name;
    this.filterData(this.name);
  }
  @Watch("loading")
  watchLoading(v: boolean) {
    if (v) {
      this.more = "";
    } else {
      this.more = "点击加载更多";
    }
  }
}
</script>

<style scoped>
.item {
  width: 277px;
  display: inline-block;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.loading-wrap {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  background-color: white;
}
</style>