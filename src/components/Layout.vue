<template>
  <div class="wrap">
    <app-top />
    <app-main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppTop from "./AppTop.vue";
import AppMain from "./AppMain.vue";
@Component({
  name: "layout",
  components: {
    AppTop,
    AppMain
  }
})
export default class Layout extends Vue {}
</script>
<style scoped>
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>