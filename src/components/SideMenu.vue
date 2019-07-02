<template>
    <div class="side-menu m-5">
        <h2 class="my-4">Nick Staggs</h2>
        <p class="my-4">
            Just your typical coffee addicted software engineer. Exploring the intracacies and whimsies of the web, one cup at a time.
        </p>
        <span class="separation-line mt-4 mb-3"></span>
        <div v-for="child in mainChildren" v-bind:key="child.displayName">
            <router-link  :to="child.path">
                <p v-if="isCurrentPage(child.path)">
                    <b>{{child.displayName}}</b>
                </p>
                <p v-else>
                    {{child.displayName}}
                </p>
            </router-link>
        </div >
    </div>
</template>
<script>
import MainChildren from '../router/mainChildren.js'

export default {
    name: 'SideMenu',
    data() {
        return {
            mainChildren: MainChildren,
        }
    },
    methods: {
        isCurrentPage(menuItemPath) {
            let currentPage = this.$route.path;
            return menuItemPath === currentPage;
        }
    }
}
</script>
<style scoped>
.side-menu {
    width: 25%;
    height: 100%;
    position: fixed;
}
.separation-line {
    display: block;
    font-size: .75em;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #f2f3f3;
}
</style>
