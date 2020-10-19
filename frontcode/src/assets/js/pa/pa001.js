import Spo003 from "@/components/sp/spo003"
import Datepicker from "vuejs-datepicker"
import { ko } from 'vuejs-datepicker/dist/locale'


export default {
    components: {
        Spo003,
        Datepicker
    },
    data() {
        return {
            studio: [],
            modal: false,
            time: [],
            reserve: [],
            ko: ko,
            dateValue: null,
            format: "yyyy년 MMMM dd일 D요일",
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
        },

    }

}