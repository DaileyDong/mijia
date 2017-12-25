<template>
  <div>
<y-header></y-header>
 <y-living></y-living>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YLiving from '../../components/header/y-living'

export default {
  name:"Phone",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-living":YLiving
  }
}
</script>