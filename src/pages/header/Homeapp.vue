<template>
  <div>
<y-header></y-header>
 <y-homeapp></y-homeapp>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YHomeapp from '../../components/header/y-homeapp'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-homeapp":YHomeapp
  },

}
</script>