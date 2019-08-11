<template>

    <b-row class="">
        <b-col v-for="project in this.projects" :key="project.name" sm="12" md="6" lg="4" class="my-2">
            <project-card :project="project"></project-card>
        </b-col>
    </b-row>

</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'
export default {
    name: "ProjectComponent",
    components: {
        'project-card': ProjectCard
    },
    data() {
        return {
            projects: {}
        }
    },
    mounted: function() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios
                .get(process.env.VUE_APP_BASEURL + "projects")
                .then((response) => this.projects = response.data);
        }
    }
}
</script>

<style scoped>

    .h-97 {
        height: 97% !important;
    }

    .card-img-top {
        width: 100%;
        height: 15vw;
        object-fit: cover;
    }
</style>
