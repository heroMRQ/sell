<template>
  <div class="icon" :class="classMap[iconType]"></div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    iconType: {
      type: Number
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'guarantee', 'invoice'];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin'
  .icon
    display: inline-block
    vertical-align: top
    width: 12px
    height: 12px
    margin-right: 5px
    background-size: 12px 12px
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
</style>
