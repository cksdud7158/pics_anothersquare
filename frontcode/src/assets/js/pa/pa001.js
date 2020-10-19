import Spo003 from "@/components/sp/spo003"
import dropdown from 'vue-dropdowns';

export default {
    components: {
        Spo003,
        dropdown
    },
    data() {
        return {
            studio: [],
            date: new Date().toISOString().substr(0, 10),
            modal: false,
            time: [],
            reserve: [],

            //dropdown
            arrayOfObjects: [1, 2, 3, 4, 5, 6, 78, 1, 2, 3, 4, 5, 6, 78, 1, 2, 3, 4, 5, 6, 78, 1, 2, 3, 4, 5, 6, 78, 1, 2, 3, 4, 5, 6, 78, ],
            object: {
                name: '시간을 선택해주세요',
            }
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
        },
    },
    methods: {
        toAdStudio() {
            return this.$router.push("/");
        },
        callScheule() {

            this.$axios
                .get("http://127.0.0.1:7777/reserve/" + this.studio.name + "/" + this.date)
                .then(response => {
                    this.reserve = []
                    this.reserve = response.data;
                    console.log(response)

                })
                .catch(error => {
                    console.log(error);
                    this.loginCheck = true;
                    this.errored = true;
                })
                .finally(() => {
                    this.loading = false
                    this.possibleReserveTime()
                });
        },
        possibleReserveTime() {
            if (this.reserve.hour != null) {
                let times = this.reserve.hour.split(',');
                for (let i in times) {
                    let j = Number(i) + 1
                    this.arrayOfObjects[i - 1] = {
                        "name": i + "시 -" + " " + j + "시"
                    }
                }
                console.log(this.arrayOfObjects)
            } else {
                for (let i = 1; i < 24; i++) {
                    let j = Number(i) + 1
                    this.arrayOfObjects[i - 1] = {
                        'name': i + "시 -" + " " + j + "시"
                    }
                }
                console.log(this.arrayOfObjects)

            }
        },
        methodToRunOnSelect(payload) {
            this.object = payload;
        }

    }

}