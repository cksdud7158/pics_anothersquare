export default {
    data() {
        return {
            user: this.$store.state.user,
            reserves: [],
            reserveStudio: [],
        };
    },
    mounted() {
        this.$axios
            .get("http://" + this.$store.state.ipAddress + ":7777/allReserve")
            .then((response) => {
                this.reserves = response.data;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.loading = false;
                this.chooseStudio();
            });
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
    },
    methods: {
        chooseStudio() {
            for (let item in this.reserves) {
                if (this.reserves[item].email == this.user.email) {
                    this.reserveStudio.push(this.reserves[item]);
                }
            }
            console.log();
        },
    },
    filters: {
        dateFilter(val) {
            let temp = val.split(" ");
            return temp[0];
        },
    },
};