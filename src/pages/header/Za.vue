<template>
  <div>
<y-header></y-header>
 <y-za></y-za>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YZa from '../../components/header/y-za'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-za":YZa
  },

}
</script>