import Vue from 'vue';
import Router from 'vue-router';
// import VueResource from '';
import goods from './../components/goods/goods';
import ratings from './../components/ratings/ratings';
import seller from './../components/seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }, {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }, {
        path: '/seller',
        name: 'seller',
        component: seller
    }, {
        path: '/',
        redirect: '/goods'
    }
  ]
});
