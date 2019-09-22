<template>
    <router-link :to="'/blog/' + blog.url" class="no-style">
        <b-card 
            :title="blog.title" 
            class="mb-3 shadow-sm">

            <b-card-text class="my-2">
                {{blog.summary}}
            </b-card-text>
            
            
            {{(new Date(blog.datePosted)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}}
            
        </b-card>
    </router-link>
</template>

<script>
export default {
    name: "BlogCard",
    props: ['blog']
}
</script>

<style scoped>
a.no-style:visited, a.no-style:link {
    text-decoration: inherit;
    color: inherit;
}
</style>