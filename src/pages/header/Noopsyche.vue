<template>
  <div>
<y-header></y-header>
 <y-noopsyche></y-noopsyche>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YNoopsyche from '../../components/header/y-noopsyche'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-noopsyche":YNoopsyche
  },

}
</script>