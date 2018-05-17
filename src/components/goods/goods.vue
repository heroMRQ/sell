<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <!-- <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>>{{item.name}} -->
            <icon v-show="item.type>0" class="icon-style" :iconType="item.type"></icon>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from './../icon/icon';

const ERR_OK = 0;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    };
  },
  created() {
    // this.classMap = ['decrease', 'discount', 'special', 'guarantee', 'invoice'];
    this.$http.get('/api/goods').then(response => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      }
    });
  },
  components: {
    icon
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          font-size: 12px 
          border-1px(rgba(7, 17, 27, 0.1))
    .foods-wrapper
      flex: 1
</style>
