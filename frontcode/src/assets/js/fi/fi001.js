export default {
    data() {
        return {
            name: this.$route.params.stuName,
            studio: []
        }
    },
    mounted() {
        this.$axios
            .get("http://localhost:7777/studio/" + this.name)
            .then(response => {
                this.studio = response.data;
                console.log(response)
            })
            .catch(error => {
                console.log(error);
                this.loginCheck = true;
                this.errored = true;
            })
            .finally(() => (this.loading = false));

    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        },
        toAdStudio() {
            return this.$router.push("/");
        }
    },
}