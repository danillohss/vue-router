import { createWebHistory, createRouter, onBeforeRouteLeave } from "vue-router";
import Home from './pages/Home'
import Produto from './pages/produto/Produto'
import MeusProdutos from './pages/produto/MeusProdutos';
import Detalhe from './pages/produto/Detalhe';
import Editar from './pages/produto/Editar';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/produto/",
    name: "produto",
    component: Produto,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log("Enter router")
      next();
    },
    children: [
      { path: '', component: MeusProdutos },
      { path: ':id', component: Detalhe, props: true, },
      { path: ':id/editar', component: Editar, props: true, name: 'editar' },
    ]
  },
  {
    path: '/*/',
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;