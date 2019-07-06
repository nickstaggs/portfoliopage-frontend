<template>
    <div>
        <b-row class="m-2">
            <b-col v-for="project in this.projects" v-bind:key="project.name" sm="12" md="6" lg="4">
                <b-card 
                    :title="project.name" 
                    :img-src="getImageUrl(project.picture)">

                    <b-card-text>
                        {{project.summary}}
                    </b-card-text>

                    <a class="m-2" v-if="project.website" :href="project.website">Site</a>
                    <a class="m-2" v-if="project.repositorySite" :href="project.repositorySite">Repository</a>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ProjectComponent",
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
        },
        getImageUrl(id) {
            return process.env.VUE_APP_BASEURL + 'files/' + id;
        }
    }
}
</script>
