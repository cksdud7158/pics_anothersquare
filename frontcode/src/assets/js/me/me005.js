export default {
    data() {
        return {
            user: this.$store.state.user,
        };
    },
    mounted() {},
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {},
};