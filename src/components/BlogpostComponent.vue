<template>
    <div>
        <h1>{{blogpost.title}}</h1>
        <h4>{{displayDate}}</h4>
        <br/>
        <article v-html="blogpost.body"></article>
    </div>  
</template>

<script>
import axios from 'axios';
export default {
    name: 'BlogpostComponent',
    props: [ 'blogpostUrl'],
    data() {
        return {
            blogpost: {},
            displayDate: ""
        }
    },
    methods: {
        getBlogpost() {
            axios
                .get(process.env.VUE_APP_BASEURL + "blogposts/" + this.blogpostUrl)
                .then( response => {
                    this.blogpost = response.data;
                    this.displayDate = (new Date(this.blogpost.date)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
                });
        }
    },
    mounted: function() {
        this.getBlogpost();
    }
}
</script>

<style>
article img {
    max-width: 97vw;
}
</style>
