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
    methods: {
        next1() {
            this.$router.push("/bo001");
        },
        next2() {
            this.$router.push("/me006");
        },
    },
};