<template>
  <div>
<y-header></y-header>
 <y-avs></y-avs>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YAvs from '../../components/header/y-avs'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-avs":YAvs
  },

}
</script>