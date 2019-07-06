<template>
    <div >
        <div v-if="isMobile()">
            <TopNavBar></TopNavBar>
            <router-view></router-view>
        </div>
        <div v-else>
            <b-row>
                <b-col>
                    <SideMenu></SideMenu>
                </b-col>
                <b-col cols="9">
                    <router-view></router-view>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import TopNavBar from '../components/TopNavBar'
import SideMenu from '../components/SideMenu'

export default {
    name: 'MainPage',
    components: { TopNavBar, SideMenu },
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



