<template>
    <div v-html="this.renderedContent"></div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'ContentComponent',
    props: ['htmlElement', 'contentId'],
    data() {
        return {
            renderedContent: ""
        }
    },
    methods: {
        getAndRenderContent() {
            let content = "";
            axios
                .get(process.env.VUE_APP_BASEURL + "content/" + this.contentId)
                .then((response) => {
                    content += response.data;
                    this.renderedContent = `<${this.htmlElement}>${content}</${this.htmlElement}>`;
                });
        }
    },
    mounted: function() {
        this.getAndRenderContent();
    }
}
</script>
