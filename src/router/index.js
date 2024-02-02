import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/inicio"
    }, {
        path: "/",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        //los que renderizan dentro de router-vue
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/PrincipalSite.vue')
            },
            {
                path: '/Registro',
                name: 'register',
                component: () => import('../components/Form.vue')
            },
            {
                path: '/Vehiculos',
                name: 'vehicles',
                component: () => import('../components/PaginationPage.vue')
            },

            
        ]
    }
]

const router = new VueRouter({routes});
export default router;