<template>
  <div>
<y-header></y-header>
 <y-diets></y-diets>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template> 
<script>
import YHeader from "../../common/YHeader";
import YFooter from "../../common/YFooter";
import YAside from "../../common/YAside"
import YDiets from '../../components/header/y-diets'

export default {
  name:"Discounts",
    components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "y-diets":YDiets
  },

}
</script>