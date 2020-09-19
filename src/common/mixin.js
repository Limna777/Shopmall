import { from } from "core-js/fn/array";
import { debounce } from './utils'
import BackTop from '@/components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  }
}