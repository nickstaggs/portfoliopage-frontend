import AboutComponent from '../components/AboutComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import CVComponent from '../components/CVComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'

export default 
[   
    { path: '/blog', component: BlogComponent, name: 'BlogComponent', displayName:'blog'},
    { path: '/about', component: AboutComponent, name:'AboutComponent', displayName:'about' },
    { path: '/projects', component: ProjectComponent, name:'ProjectComponent', displayName:'projects' },
    { path: '/cv', component: CVComponent, name:'CVComponent', displayName:'CV' },
]