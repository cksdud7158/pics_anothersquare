export default {
    data() {
        return {
            studio: '',
            paymentInformation: '',
            payment1: false,
            payment2: false,
            payment3: false,
            payment4: false,
            placePrice: '',
            devicePrice: '',
            totalPrice: '',
        }
    },
    mounted() {
        this.studio = JSON.parse(sessionStorage.getItem('studio'))
        this.paymentInformation = JSON.parse(sessionStorage.getItem('paymentInformation'))

        this.placePrice = this.paymentInformation.selectedTime.length * this.studio.price
        this.devicePrice = this.paymentInformation.selectedDevice.length * 10000
        this.totalPrice = this.placePrice + this.devicePrice
    },
    computed: {
        wHeight() {
            let wHeight = window.innerHeight;
            return wHeight + 'px'
        },
    },
    methods: {
        checkBtn1() {
            this.makeFalse()
            this.payment1 = !this.payment1
        },
        checkBtn2() {
            this.makeFalse()
            this.payment2 = !this.payment2
        },
        checkBtn3() {
            this.makeFalse()
            this.payment3 = !this.payment3
        },
        checkBtn4() {
            this.makeFalse()
            this.payment4 = !this.payment4
        },
        makeFalse() {
            this.payment1 = false
            this.payment2 = false
            this.payment3 = false
            this.payment4 = false
        },
        toPay() {
            this.$router.push("/pa003")
        },
        toPa001() {
            this.$router.push("/pa001")
        }
    },
    filters: {
        currency: function(value) {
            let num = new Number(value);
            return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        },
    },
}