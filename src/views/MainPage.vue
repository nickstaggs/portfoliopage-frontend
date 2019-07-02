<template>
    <div >
        <div v-if="isMobile()">
            <TopNavBar></TopNavBar>
        </div>
        <div v-else>
            <SideMenu></SideMenu>
        </div>
        <MainComponent></MainComponent>
    </div>
</template>
<script>
import TopNavBar from '../components/TopNavBar'
import MainComponent from '../components/MainComponent'
import SideMenu from '../components/SideMenu'

export default {
    name: 'MainPage',
    components: { TopNavBar, MainComponent, SideMenu },
    data() {
        return {
            windowWidth: 0
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        isMobile() {
            return this.windowWidth < 850;
        }
    }
}
</script>

