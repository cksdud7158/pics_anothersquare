export default {
    data() {
        return {
            user: this.$store.state.user,
            reserves: [],
            reserveStudios: [],
            toDay: "",
        };
    },
    mounted() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        this.toDay = year + "-" + month + "-" + day;
        this.toDay = this.toDay.replace(/-/g, "");
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
                    let tempDate = this.reserves[item].date;
                    tempDate = tempDate.split(" ")[0].replace(/-/g, "");
                    if (tempDate >= this.toDay) {
                        this.reserveStudios.push(this.reserves[item]);
                    }
                }
            }
        },
        ShowDetail(index) {
            sessionStorage.setItem(
                "studioInfo",
                JSON.stringify(this.reserveStudios[index])
            );
            console.log();
            this.$router.push("/bo002");
        },
        goBack() {
            this.$router.push("/me005");
        },
    },
    filters: {
        dateFilter(val) {
            let temp = val.split(" ");
            return temp[0];
        },
        currency: function(value) {
            let num = new Number(value);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        },
    },
};