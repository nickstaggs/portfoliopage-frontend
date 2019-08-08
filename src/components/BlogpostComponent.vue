<template>
    <div class="px-4 py-2">
        <h1>{{blogpost.title}}</h1>
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
            blogpost: {}
        }
    },
    methods: {
        getBlogpost() {
            axios
                .get(process.env.VUE_APP_BASEURL + "blogposts/" + this.blogpostUrl)
                .then((response) => this.blogpost = response.data);
        }
    },
    mounted: function() {
        this.getBlogpost();
    }
}
</script>
