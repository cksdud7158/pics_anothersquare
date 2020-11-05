export default {
    data() {
        return {};
    },
    mounted() {
        this.goToMain();
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        goToMain() {
            setTimeout(() => {
                this.$router.push("/");
            }, 1500);
        },
    },
};