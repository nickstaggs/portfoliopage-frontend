import MainPage from '../views/MainPage.vue'
import MainChildren from './mainChildren.js'
import MainComponent from '../components/MainComponent.vue'

export default 
[
    { path: '', component: MainPage,
        children: [
            {
                path: '',
                name:'MainPage',
                component: MainComponent
            },
            ...MainChildren
        ]
    }
]