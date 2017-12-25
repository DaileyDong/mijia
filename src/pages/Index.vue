<template>
  <div class="index">
<y-header></y-header>
<home></home>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
  
</template>

<script>
import YHeader from "../common/YHeader";
import YFooter from "../common/YFooter";
import YAside from "../common/YAside";
import Home from "./home/Home";
export default {
  name: "index",
  data() {
    return {
      title:'买爆款-米家有品'
    };
  },
  components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "home":Home
  }
};
</script>

<style scoped>

</style>
