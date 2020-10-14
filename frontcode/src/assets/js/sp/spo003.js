import Map from "@/views/map.vue";

export default {
    components: {
        Map
    },
    props: ['address'],
    data() {
        return {
            dialog: false
        };
    }
};