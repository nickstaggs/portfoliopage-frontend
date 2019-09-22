<template>
    <b-row class="">
        <b-col sm="12" v-for="blogpost in this.blogposts" :key="blogpost.title">
            <blogpost-card :blog="blogpost"></blogpost-card>
        </b-col>
    </b-row>
</template>
<script>
import axios from 'axios';
import BlogpostCard from './BlogpostCard.vue';

export default {
    name: 'BlogpostList',
    components: {
        'blogpost-card': BlogpostCard,
    },
    data() {
        return {
            blogposts: {},
        }
    },
    methods: {
        getBlogposts() {
            axios
                .get(process.env.VUE_APP_BASEURL + "blogposts")
                .then( response => {
                    this.blogposts = response.data.sort((a,b) => {
                        let aDate = new Date(a.datePosted);
                        let bDate = new Date(b.datePosted);
                        return bDate-aDate;
                    })
                });
        }
    },
    mounted: function() {
        this.getBlogposts();
    }
}
</script>