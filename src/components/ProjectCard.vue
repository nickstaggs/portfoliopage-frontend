<template>
    <b-card 
        :title="project.name" 
        class="h-100 shadow-sm">
        
        <b-card-img :src="getImageUrl(project.picture)" class="card-image-top" :top=true>

        </b-card-img>

        <b-card-text class="my-2">
            {{project.summary}}
        </b-card-text>
        <div slot="footer">
            <a class="m-2" v-if="project.website" :href="project.website">Site</a>
            <a class="m-2" v-if="project.repositorySite" :href="project.repositorySite">Repository</a>
        </div>
        
    </b-card>
</template>

<script>
export default {
    name: "ProjectCard",
    props: ['project'],
    methods: {
        getImageUrl(id) {
            if (id !== undefined) {
                return process.env.VUE_APP_BASEURL + 'files/' + id;
            }
            else {
                return "null"
            }
        }
    }
}
</script>

<style scoped>

    .card-img-top {
        width: 100%;
        height: 20vw;
        object-fit: cover;
    }
</style>
