import Spo003 from "@/components/sp/spo003"

export default {
    components: {
        Spo003
    },
    data() {
        return {
            studio: [],
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            e6: [],
            reserve: [1, 2, 3, 4, 5]
        }
    },
    mounted() {
        this.studio = JSON.parse(sessionStorage.getItem('studio'))
    },
    updated() {

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
        callScheule() {
            this.$axios
                .get("http://localhost:7777/reserve" + this.name)
                .then(response => {
                    this.reserve = response.data;
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                    this.loginCheck = true;
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        }
    }

}