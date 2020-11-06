export default {
    data() {
        return {
            studios: [],
            condition: {},
            reserves: [],
            temp: [],
        };
    },
    mounted() {
        this.condition = JSON.parse(sessionStorage.getItem("condition"));
        this.$axios
            .get("http://" + this.$store.state.ipAddress + ":7777/studios")
            .then((response) => {
                this.studios = response.data;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.loading = false;
                this.callAllReserve;
            });
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + "px";
        },
        filterStudios() {
            // for (let i = 0; i < this.studios.length; i++) {
            //     if (this.studios[i].name.match(this.condition.searchWord)) {
            //         if (this.condition.district == this.studios[i].name.split(" ")[1]) {
            //             if (this.condition.area1 <= this.studios[i].area) {
            //                 if (this.condition.area2 >= this.studios[i].area) {
            //                     if (this.condition.price1 <= this.studios[i].price) {
            //                         if (this.condition.price2 >= this.studios[i].price) {
            //                             if (
            //                                 this.condition.peopleNum <= this.studios[i].capacityPeople
            //                             ) {
            //                                 if (this.condition.hashTag != null) {
            //                                     let tagList = this.condition.hashTag.split("#");
            //                                     for (let j = 0; j < tagList.length; i++) {
            //                                         if (tagList[j] == this.studios[i].tag1) {
            //                                             this.temp.unshift(this.studios[i]);
            //                                         }
            //                                         if (tagList[j] == this.studios[i].tag2) {
            //                                             this.temp.unshift(this.studios[i]);
            //                                         }
            //                                         if (tagList[j] == this.studios[i].tag3) {
            //                                             this.temp.unshift(this.studios[i]);
            //                                         }
            //                                     }
            //                                 } else {
            //                                     this.temp.unshift(this.studios[i]);
            //                                 }
            //                             } else {
            //                                 this.temp.unshift(this.studios[i]);
            //                             }
            //                         } else {
            //                             this.temp.unshift(this.studios[i]);
            //                         }
            //                     } else {
            //                         this.temp.unshift(this.studios[i]);
            //                     }
            //                 } else {
            //                     this.temp.unshift(this.studios[i]);
            //                 }
            //             } else {
            //                 this.temp.unshift(this.studios[i]);
            //             }
            //         } else {
            //             this.temp.unshift(this.studios[i]);
            //         }
            //     }
            // }

            for (let i = 0; i < this.studios.length; i++) {
                if (this.studios[i].name.match(this.condition.searchWord)) {
                    if (this.condition.district == this.studios[i].name.split(" ")[1]) {
                        if (this.condition.area1 <= this.studios[i].area) {
                            if (this.condition.area2 >= this.studios[i].area) {
                                if (this.condition.price1 <= this.studios[i].price) {
                                    if (this.condition.price2 >= this.studios[i].price) {
                                        if (
                                            this.condition.peopleNum <= this.studios[i].capacityPeople
                                        ) {
                                            if (this.condition.hashTag != null) {
                                                let tagList = this.condition.hashTag.split("#");
                                                for (let j = 0; j < tagList.length; i++) {
                                                    if (tagList[j] == this.studios[i].tag1) {
                                                        this.temp.push(this.studios[i]);
                                                    }
                                                    if (tagList[j] == this.studios[i].tag2) {
                                                        this.temp.push(this.studios[i]);
                                                    }
                                                    if (tagList[j] == this.studios[i].tag3) {
                                                        this.temp.push(this.studios[i]);
                                                    }
                                                }
                                            } else {
                                                this.temp.unshift(this.studios[i]);
                                            }
                                        } else {
                                            this.temp.unshift(this.studios[i]);
                                        }
                                    } else {
                                        this.temp.unshift(this.studios[i]);
                                    }
                                } else {
                                    this.temp.unshift(this.studios[i]);
                                }
                            } else {
                                this.temp.unshift(this.studios[i]);
                            }
                        } else {
                            this.temp.unshift(this.studios[i]);
                        }
                    } else {
                        this.temp.unshift(this.studios[i]);
                    }
                } else {
                    this.temp.push(this.studios[i]);
                }
            }

            this.studios = [];
            this.studios = this.temp;
            for (let j in this.studios) {
                console.log("검색 결과::" + this.studios[j].name);
            }
        },
        callAllReserve() {
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
                    this.filterStudios;
                });
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