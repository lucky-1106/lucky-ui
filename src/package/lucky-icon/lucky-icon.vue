<template>
  <span
    :class="['lucky-icon', 'iconfont', 'icon-' + name]"
    :style="{
      fontSize: size + 'px',
      color: color
    }"
  ></span>
</template>
<script>
export default {
  name: 'lucky-icon',
  props: {
    // 图标名称
    name: {
      type: String,
      default: 'smile-fill'
    },
    // 图标尺寸
    size: {
      type: Number,
      default: 16
    },
    // 图标颜色
    color: {
      type: String,
      default: '#606266'
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
@import url(./icon/iconfont.css)
/* .lucky-icon {

} */
</style>
