<template>
    <b-row class="">
        <b-col sm="12">
            <h3>Latest Blogpost</h3>
        </b-col>
        <b-col v-if="latestBlogpost" sm="12">
            <blogpost-card :blog="latestBlogpost"></blogpost-card>
        </b-col>
        <b-col sm="12" class="mt-3">
            <h3>Latest Project</h3>
        </b-col>
        <b-col v-if="latestProject" sm="12">
            <project-card :project="latestProject"></project-card>
        </b-col>
    </b-row>
</template>
<script>
import BlogpostCard from './BlogpostCard'
import ProjectCard from './ProjectCard'
import axios from 'axios'
export default {
    name: 'MainComponent',
    components: {
        'blogpost-card': BlogpostCard,
        'project-card': ProjectCard
    },
    data() {
        return {
            latestProject: null,
            latestBlogpost: null
        }
    },
    methods: {
        getLatestBlogpost() {
            axios
                .get(process.env.VUE_APP_BASEURL + "blogposts?latest=true")
                .then((response) => this.latestBlogpost = response.data[0]);
        },
        getLatestProject() {
            axios
                .get(process.env.VUE_APP_BASEURL + "projects?latest=true")
                .then((response) => this.latestProject = response.data[0]);
        }
    },
    mounted: function() {
        this.getLatestBlogpost();
        this.getLatestProject();
    }
}
</script>
