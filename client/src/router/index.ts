import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { routes as routesList } from '@/constants';

import HomeView from '@/views/HomeView';
import RegisterView from '@/views/RegisterView';
import LoginView from '@/views/LoginView';

const routes: Array<RouteRecordRaw> = [
  {
    path: routesList.main,
    name: 'Home',
    component: HomeView,
  },
  {
    path: routesList.register,
    name: 'Register',
    component: RegisterView,
  },
  {
    path: routesList.login,
    name: 'Login',
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
