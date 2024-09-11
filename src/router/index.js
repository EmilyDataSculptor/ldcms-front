import Vue from "vue";
import VueRouter from "vue-router";

import aboutUs from '@/views/aboutUs.vue';
import index from '@/views/index.vue';
import product from '@/views/product.vue';
import productSubpage from '@/views/productSubpage.vue';
import productSubpageByDetails from '@/views/productSubpageByDetails.vue';
import serviceAndSupport from '@/views/serviceAndSupport.vue';
import serviceAndSupportDetails from '@/views/serviceAndSupportDetails.vue';
import downloadCenter from '@/views/downloadCenter.vue';
import solution from '@/views/solution.vue';
import solutionBySocialResponsibility from '@/views/solutionBySocialResponsibility.vue';
import contactUs from '@/views/contactUs.vue';
import newsCenter from '@/views/newsCenter.vue';
import newsCenterDetails from '@/views/newsCenterDetails.vue';
import industryNews from '@/views/industryNews.vue';
import industryNewsDetails from '@/views/industryNewsDetails.vue';


Vue.use(VueRouter);
 
const router = new VueRouter({
  mode: 'history', // 使用 hash 模式
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    
    {
      path: '/product',
      name: 'product',
      component: product,
    },

    {
      path: '/productSubpage',
      name: 'productSubpage',
      component: productSubpage
    },
    {
      path: '/productSubpageByDetails',
      name: 'productSubpageByDetails',
      component: productSubpageByDetails
    },
    {
      path: '/serviceAndSupport',
      name: 'serviceAndSupport',
      component: serviceAndSupport
    },
    {
      path: '/serviceAndSupportDetails',
      name: 'serviceAndSupportDetails',
      component: serviceAndSupportDetails
    },
    {
      path: '/downloadCenter',
      name: 'downloadCenter',
      component: downloadCenter
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
    {
      path: '/solutionBySocialResponsibility',
      name: 'solutionBySocialResponsibility',
      component: solutionBySocialResponsibility
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/newsCenter',
      name: 'newsCenter',
      component: newsCenter
    },
    {
      path: '/newsCenterDetails',
      name: 'newsCenterDetails',
      component: newsCenterDetails
    },
    {
      path: '/industryNews',
      name: 'industryNews',
      component: industryNews
    },
    {
      path: '/industryNewsDetails',
      name: 'industryNewsDetails',
      component: industryNewsDetails
    },
  ]

});
 
export default router;