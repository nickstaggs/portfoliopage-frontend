<template>
    <b-navbar sticky to="/" type="light" variant="light">
        <b-navbar-brand><router-link to="/" class="no-style">Nick Staggs</router-link></b-navbar-brand>
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
                <template slot="button-content">Home</template>
                <b-dropdown-item v-for="child in mainChildren" v-bind:key="child.name" :to="child.path"> 
                    {{child.displayName}}
                </b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
import MainChildren from '../router/mainChildren.js'
export default {
    name: 'TopNavBar',
    data() {
        return {
            mainChildren: MainChildren,
            currentRoute: ''
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
