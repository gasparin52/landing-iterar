import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
  ],
});

// Guard global
/*
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // Rutas que requieren estar logueado
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ path: "/login" });
  }

  // Evitar acceso a login/registro si ya está logueado
  if ((to.name === "Login" || to.name === "Registro") && auth.isAuthenticated) {
    return next({ path: "/" });
  }

  // Verificar permisos de la ruta
  if (to.meta.permiso && !auth.tienePermiso(to.meta.permiso)) {
    return next({ path: "/403" }); // redirige a 403 si no tiene permiso
  }

  // Continuar si todo está OK
  next();
});
*/

export default router;
