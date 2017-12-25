<template>
  <div>
<y-header></y-header>
 <y-costumes></y-costumes>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YCostumes from '../../components/header/y-costumes'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-costumes":YCostumes
  },

}
</script>