export default {
    data() {
        return {
            studios: [],
        };
    },
    mounted() {
        this.$axios
            .get("http://" + this.$store.state.ipAddress + ":7777/studios")
            .then((response) => {
                this.studios = response.data;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
                this.loginCheck = true;
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        toStudio(name) {
            this.$router.push("/fi001/" + name);
        },
        toAdStudio() {
            this.$router.push("/fi001/" + this.$store.state.adStudioName);
        },
    },
};