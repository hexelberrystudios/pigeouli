import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage';
import KnockPage from '@/components/pages/KnockPage';
import RegisterPage from '@/components/pages/RegisterPage';
import LoginPage from '@/components/pages/LoginPage';
import DashboardPage from '@/components/pages/DashboardPage';
import PostPage from '@/components/pages/PostPage';
import SettingsPage from '@/components/pages/SettingsPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
    {
      path: '/knock',
      name: 'knock-page',
      component: KnockPage
    },
    {
      path: '/register',
      name: 'register-page',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard-page',
      component: DashboardPage
    },
    {
      path: '/post',
      name: 'post-page',
      component: PostPage
    },
    {
      path: '/settings',
      name: 'settings-page',
      component: SettingsPage
    }
  ],
});
