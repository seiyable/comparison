import VueRouter from 'vue-router';
import Index from './pages/Index';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/page-a',
      component: PageA,
    },
    {
      path: '/page-b',
      component: PageB,
    },
  ],
});
