export default {
    data() {
        return {
            studioInfo: "",
        };
    },
    mounted() {
        this.studioInfo = JSON.parse(sessionStorage.getItem("studioInfo"));
    },
    destroyed() {
        sessionStorage.removeItem("studioInfo");
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        goBack() {
            this.$router.push("/bo001");
        },
        reserveCancel() {
            this.$axios
                .delete(
                    "http://" +
                    this.$store.state.ipAddress +
                    ":7777/reserveDelete/" +
                    this.studioInfo.name +
                    "/" +
                    this.studioInfo.date
                )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                    this.$router.push("/bo003");
                });
        },
    },
    filters: {
        currency: function(value) {
            let num = new Number(value);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        },
        filterDate: function(value) {
            let temp = value.split(" ");
            return temp[0];
        },
    },
};