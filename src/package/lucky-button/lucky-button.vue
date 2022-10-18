<template>
  <button
    :class="[
      'lucky-button',
      {
        primary: type === 'primary',
        success: type === 'success',
        danger: type === 'danger',
        warning: type === 'warning',
        info: type === 'info'
      },
      {
        large: size === 'large',
        small: size === 'small',
        mini: size === 'mini'
      },
      {
        'is-round': round,
        'is-icon': icon,
        'is-only-icon': onlyIcon,
        'is-circle': circle
      }
    ]"
    :style="{
      background: Array.isArray(bgColor)
        ? `linear-gradient(${bgColorLinearDirection + ',' + bgColor.join(',')})`
        : bgColor,
      borderColor: Array.isArray(bgColor) ? 'transparent' : bgColor,
      borderWidth: Array.isArray(bgColor) ? '0px' : '1px'
    }"
    :disabled="disabled"
    ref="luckyButtonRef"
    @click="handleClick"
  >
    <template v-if="!onlyIcon">
      <span class="icon-title-left" v-if="iconPlace === 'right'">{{
        title
      }}</span>
      <lucky-icon
        v-if="icon"
        :name="icon"
        :color="color"
        :size="iconSize"
      ></lucky-icon>
      <span class="icon-title-right" v-if="iconPlace === 'left'">{{
        title
      }}</span>
    </template>
    <template v-else>
      <lucky-icon :name="icon" :color="color" :size="iconSize"></lucky-icon>
    </template>
  </button>
</template>
<script>
import RippleEffect from './utils/ripple'
import luckyIcon from '../lucky-icon/lucky-icon'
export default {
  name: 'lucky-button', // 组件名
  components: { luckyIcon },
  props: {
    // 按钮类型[primary,success,danger,warning,info]
    type: {
      type: String,
      default: 'default'
    },
    // 按钮标题
    title: {
      type: String,
      default: 'Button'
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'normal'
    },
    // 按钮背景颜色，注意：设置后type属性无效
    bgColor: {
      type: [String, Array],
      default: ''
    },
    // 按钮字体颜色
    color: {
      type: String,
      default: ''
    },
    // 按钮背景颜色渐变方向
    bgColorLinearDirection: {
      type: String,
      default: 'to right'
    },
    // 按钮点击是否有波纹扩散动效
    ripple: {
      type: Boolean,
      default: true
    },
    // 按钮是否为圆角
    round: {
      type: Boolean,
      default: false
    },
    // 按钮是否为圆形
    circle: {
      type: Boolean,
      default: false
    },
    // 按钮是否为图标按钮
    onlyIcon: {
      type: Boolean,
      default: false
    },
    // 按钮图标名称
    icon: {
      type: String,
      default: ''
    },
    // 按钮图标尺寸
    iconSize: {
      type: Number,
      default: 16
    },
    // 按钮图标位置
    iconPlace: {
      type: String,
      default: 'left'
    },
    // 按钮是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 添加点击波纹效果
    if (this.ripple) new RippleEffect(this.$refs.luckyButtonRef)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped>
.lucky-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
  margin-right: 10px;
  padding: 0 16px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  background-color: #fff;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
}

/* 按钮颜色 */
.lucky-button.primary {
  border-color: #297cdb;
  background-color: #297cdb;
  color: #fff;
}
.lucky-button.primary:hover {
  border-color: #297cdbee;
  background-color: #297cdbee;
  color: #fff;
}
.lucky-button.success {
  border-color: #4cbb50;
  background-color: #4cbb50;
  color: #fff;
}
.lucky-button.success:hover {
  border-color: #4cbb50ee;
  background-color: #4cbb50ee;
  color: #fff;
}
.lucky-button.danger {
  border-color: #d71103;
  background-color: #d71103;
  color: #fff;
}
.lucky-button.danger:hover {
  border-color: #d71103ee;
  background-color: #d71103ee;
  color: #fff;
}
.lucky-button.warning {
  border-color: #fe5e08;
  background-color: #fe5e08;
  color: #fff;
}
.lucky-button.warning:hover {
  border-color: #fe5e08ee;
  background-color: #fe5e08ee;
  color: #fff;
}
.lucky-button.info {
  border-color: #555;
  background-color: #555;
  color: #fff;
}
.lucky-button.info:hover {
  border-color: #555555ee;
  background-color: #555555ee;
  color: #fff;
}

/* 按钮尺寸 */
.lucky-button.large {
  height: 42px;
  padding: 0 24px;
  font-size: 16px;
}
.lucky-button.small {
  height: 30px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 500;
}
.lucky-button.mini {
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 500;
}

.lucky-button.is-round {
  border-radius: 18px;
}
.lucky-button.is-round.large {
  border-radius: 21px;
}
.lucky-button.is-round.small {
  border-radius: 15px;
}
.lucky-button.is-round.mini {
  border-radius: 12px;
}
.lucky-button.is-circle {
  border-radius: 50%;
}
.lucky-button.is-only-icon {
  width: 36px;
  height: 36px;
  padding: 0px;
}
.lucky-button.is-only-icon.large {
  width: 42px;
  height: 42px;
}
.lucky-button.is-only-icon.small {
  width: 30px;
  height: 30px;
}
.lucky-button.is-only-icon.mini {
  width: 24px;
  height: 24px;
}
.icon-title-left {
  margin-right: 5px;
}
.icon-title-right {
  margin-left: 5px;
}
</style>
<style>
.ripple-container .ripple {
  background-color: rgba(255, 255, 255, 0.4);
  animation: ripple 1s forwards cubic-bezier(0, 0, 0.2, 1);
}
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  80% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
}
</style>
