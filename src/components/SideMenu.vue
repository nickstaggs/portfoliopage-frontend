<template>
    <div class="sticky">
        <div class="center-headshot">
            <img class="headshot" :src="headshotUrl">
        </div>
        <h2 class="my-4"><router-link to="/" class="no-style">Nick Staggs</router-link></h2>
        <p class="my-4">
            Just your typical coffee addicted software engineer. Exploring the intracacies and whimsies of the web, one cup at a time.
        </p>
        <span class="separation-line mt-4 mb-3"></span>
        <div v-for="child in mainChildren" v-bind:key="child.displayName">
            <router-link  :to="{name: child.path}">
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
            headshotUrl: process.env.VUE_APP_BASEURL + 'files/5d5225ec957a00280651fd97'
        }
    },
    methods: {
        isCurrentPage(menuItemPath) {
            let currentPage = this.$route.path.split('/')[1];
            return menuItemPath === currentPage;
        }
    }
}
</script>
<style scoped>
.separation-line {
    display: block;
    font-size: .75em;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #f2f3f3;
}

.sticky {
    position:sticky;
    top: 3em;
}

.headshot {
    width: 60%;
    border-radius: 50%;
    border: lightgrey;
    border-width: medium;
    border-style: solid;
    margin: 0 12.5%;
}
.center-headshot {
    text-align: center;
}
</style>
