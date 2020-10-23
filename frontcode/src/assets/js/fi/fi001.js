export default {
    data() {
        return {
            name: this.$route.params.stuName,
            studio: [],
            parkingCheck: true
        }
    },
    mounted() {
        this.$axios
            .get("http://3.35.26.65:7777/studio/" + this.name)
            .then(response => {
                this.studio = response.data;
                console.log(response)
                sessionStorage.setItem('studio', JSON.stringify(response.data))
            })
            .catch(error => {
                console.log(error);
                this.loginCheck = true;
                this.errored = true;
            })
            .finally(() => (this.loading = false));
        if (this.studio.parking == 0) {
            this.parkingCheck = false
        } else {
            this.parkingCheck = true
        }


    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        }


    },
    methods: {
        toAdStudio() {
            return this.$router.push("/");
        },
        toReserve() {
            this.$router.push("/pa001/");
        },
        toVR() {
            this.$router.push("/fi002/");
        },
    },
}