<template>
    <div>
<y-header></y-header>
 <d-mattress></d-mattress>
<y-aside></y-aside>
<y-footer></y-footer>
  </div>
</template>
<script>
import YHeader from "../../../common/YHeader";
import YFooter from "../../../common/YFooter";
import YAside from "../../../common/YAside";
import DMattress from '../../../components/header/detail/d-mattress'
export default {
 components: {
    "y-header": YHeader,
    "y-footer": YFooter,
    "y-aside": YAside,
    "d-mattress":DMattress
  }
}
</script>
