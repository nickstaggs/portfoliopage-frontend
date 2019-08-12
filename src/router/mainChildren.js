import AboutComponent from '../components/AboutComponent.vue'
import ProjectComponent from '../components/ProjectComponent.vue'
import RésuméComponent from '../components/RésuméComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'
import BlogpostComponent from '../components/BlogpostComponent.vue'
import BlogpostList from '../components/BlogpostList.vue'

export default 
[   
    { path: 'blog', component: BlogComponent, displayName:'blog',
        children: [
            {
                path: '',
                name: 'blog',
                component: BlogpostList
            },
            {
                path: ':blogpostUrl',
                name: ':blogpostUrl',
                component: BlogpostComponent,
                props: (route) => ({ blogpostUrl: route.params.blogpostUrl })
            }
        ]
    },
    { path: 'about', component: AboutComponent, name:'about', displayName:'about' },
    { path: 'projects', component: ProjectComponent, name:'projects', displayName:'projects' },
    { path: 'résumé', component: RésuméComponent, name:'résumé', displayName:'résumé' },
]