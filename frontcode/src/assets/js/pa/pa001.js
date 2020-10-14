import Spo003 from "@/components/sp/spo003"
export default {
    components: {
        Spo003
    },
    data() {
        return {
            studio: [],

        }
    },
    mounted() {
        this.studio = JSON.parse(sessionStorage.getItem('studio'))
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        }
    },
    methods: {
        toMap() {
            this.$router.push("/map/" + this.studio.address)
        }
    },
}