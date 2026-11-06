import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import ContactsView from '../views/ContactsView.vue'
import PrivacyView from '../views/PrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/catalog', name: 'catalog', component: CatalogView },
    { path: '/delivery', name: 'delivery', component: DeliveryView },
    { path: '/contacts', name: 'contacts', component: ContactsView },
    { path: '/privacy', name: 'privacy', component: PrivacyView }
  ]
})

export default router
