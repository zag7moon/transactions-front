import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login/Login';
import TransactionList from '../components/Transaction/TransactionList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'transactions',
      component: TransactionList
    }
  ]
});
