<template>
    <b-row class="">
        <b-col sm="12">
            <content-component htmlElement="p" :contentId="aboutContent['about1']"></content-component>
        </b-col>
        <b-col sm="12">
            <content-component htmlElement="p" :contentId="aboutContent['about2']"></content-component>
        </b-col>
        <b-col sm="12">
            <content-component htmlElement="p" :contentId="aboutContent['about3']"></content-component>
        </b-col>
        <b-col sm="12">
            <content-component htmlElement="p" :contentId="aboutContent['about4']"></content-component>
        </b-col>
    </b-row>
</template>
<script>
import ContentComponent from './ContentComponent';
export default {
    name: 'AboutComponent',
    components: {
        'content-component': ContentComponent
    },
    data() {
        return {
            aboutContent: {
                "about1": "5d4ffde2683bd302157bb4ce",
                "about2": "5d4ffdf9683bd302157bb4d3",
                "about3": "5d4ffe15683bd302157bb4d8",
                "about4": "5d4ffe28683bd302157bb4dd"
            }
        }
    }
}
</script>
