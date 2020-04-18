import Search from './components/pxSearch.vue'
import About from './components/shared/About.vue'
import TrackDetail from './components/pxTrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track' }
]

export default routes
