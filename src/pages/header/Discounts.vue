<template>
  <div>
<y-header></y-header>
 <y-discounts></y-discounts>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YDiscounts from '../../components/header/y-discounts'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-discounts":YDiscounts
  },

}
</script>


