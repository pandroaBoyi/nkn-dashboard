<template>
<div :class="['nb-dialog',{'show':value}]" @click="handleClick" @mousewheel.prevent>
  <div class="dialog-message-box" ref="dialog">
    <dialog-header>
      <slot name="dialog-header-text"></slot>
    </dialog-header>
    <dialog-content>
      <slot name="dialog-body-content"></slot>
    </dialog-content>
    <dialog-footer>
      <dialog-button type="cancel" @click.native="hiddenDialog">{{$t('dialog.cancel')}}</dialog-button>
      <slot name="dialog-footer-btn"></slot>
    </dialog-footer>
  </div>
</div>
</template>

<script>
import DialogButton from '@/components/base/plugins/DialogButton.vue'
import DialogFooter from '@/components/base/plugins/DialogFooter.vue'
import DialogContent from '@/components/base/plugins/DialogContent.vue'
import DialogHeader from '@/components/base/plugins/DialogHeader.vue'
export default {
  components: {
    DialogButton,
    DialogFooter,
    DialogContent,
    DialogHeader
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      if (e.target.classList.contains('nb-dialog')) {
        this.hiddenDialog()
      }
    },
    hiddenDialog () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="less" scoped>
.nb-dialog {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  .dialog-message-box {
    width: 500px;
    background: @common-bg-color;
    border-radius: 6px;
  }
}

.show {
  display: flex;
}
</style>
