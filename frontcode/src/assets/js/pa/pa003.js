export default {
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        },
    },
    methods: {
        toReserveList() {
            this.$router.push("/bo001")
        },
        toSearch() {
            this.$router.push("/se001")
        }
    },
}