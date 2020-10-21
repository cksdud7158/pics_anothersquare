import Spo003 from "@/components/sp/spo003"

export default {
    components: {
        Spo003,
    },
    data() {
        return {
            studio: [],
            modal: false,
            peopleNum: '',
            time: [],
            reserve: [],
            dateInfo: "",
            event: "",
            possibleReserve: [],
            selectedTime: [],
            hasDevice: [],
            selectedDevice: [],
            dialog: false,
            requireItem: '',
            paymentInformation: {
                peopleNum: '',
                dateInfo: '',
                selectedTime: '',
                selectedDevice: ''
            }

        }
    },
    beforeMount() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        this.dateInfo = year + "-" + month + "-" + day;
    },
    mounted() {
        this.studio = JSON.parse(sessionStorage.getItem('studio'))
        this.hasDevice = this.studio.hasDevice.split(",")
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
        handler() {
            this.callScheule()
        },
        callScheule() {
            this.$axios
                .get("http://3.35.26.65:7777/reserve/" + this.studio.name + "/" + this.dateInfo)
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
            for (let i = 0; i < 24; i++) {
                let j = i + 1
                this.possibleReserve[i] = i + "시 ~" + " " + j + "시"
            }
            if (this.reserve.hour != null) {
                this.possibleReserve = []
                let times = this.reserve.hour.split(',');
                for (let i in times) {
                    let j = Number(i) + 1
                    this.possibleReserve[i] = times[i] + "시 ~" + j + "시"
                }
            }
            console.log(this.possibleReserve)
        },
        toReserve() {
            if (this.peopleNum == '') {
                this.requireItem = "인원을 입력해주세요"
                this.dialog = true
                return
            } else if (this.dateInfo == '') {
                this.requireItem = "날짜를 입력해주세요"
                this.dialog = true
                return
            } else if (this.selectedTime == '') {
                this.requireItem = "시간을 입력해주세요"
                this.dialog = true
                return
            }
            this.paymentInformation.peopleNum = this.peopleNum
            this.paymentInformation.dateInfo = this.dateInfo
            this.paymentInformation.selectedTime = this.selectedTime
            this.paymentInformation.selectedDevice = this.selectedDevice
            sessionStorage.setItem('paymentInformation', JSON.stringify(this.paymentInformation))
            this.$router.push("/pa002")
        }
    }

}