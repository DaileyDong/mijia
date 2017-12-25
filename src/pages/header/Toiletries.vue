<template>
  <div>
<y-header></y-header>
 <y-toiletries></y-toiletries>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YToiletries from '../../components/header/y-toiletries'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-toiletries":YToiletries
  },

}
</script>