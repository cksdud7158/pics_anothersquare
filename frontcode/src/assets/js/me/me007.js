export default {
    data() {
        return {
            user: this.$store.state.user,
            studioInfo: "",
            rating: 3,
            review: "",
        };
    },
    mounted() {
        this.studioInfo = JSON.parse(sessionStorage.getItem("studioInfo"));
        this.studioInfo.date = this.studioInfo.date.split(" ")[0];
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        goBack() {
            this.$router.push("/me006");
        },
        next() {
            this.studioInfo.rating = this.rating;
            this.studioInfo.review = this.review;
            this.$axios
                .patch(
                    "http://" + this.$store.state.ipAddress + ":7777/registerReview", {
                        params: {
                            studioInfo: this.studioInfo,
                        },
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => {
                    this.loading = false;
                    this.$router.push("/me006");
                });
        },
    },
    filters: {
        currency: function(value) {
            let num = new Number(value);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        },
    },
};