export default {
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        next() {
            this.$router.push("/me001");
        },
    },
};