import Spo003 from "@/components/sp/spo003";
import SwipeListener from "swipe-listener";

export default {
  components: {
    Spo003,
  },
  data() {
    return {
      studio: [],
      modal: false,
      peopleNum: "",
      time: [],
      reserve: [],
      dateInfo: "",
      event: "",
      possibleReserve: [],
      selectedTime: [],
      hasDevice: [],
      selectedDevice: [],
      dialog: false,
      requireItem: "",
      paymentInformation: {
        peopleNum: "",
        dateInfo: "",
        selectedTime: "",
        selectedDevice: "",
      },
      toDay: "",
    };
  },
  beforeMount() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    this.dateInfo = year + "-" + month + "-" + day;
    this.toDay = year + "-" + month + "-" + day;
  },
  mounted() {
    this.studio = JSON.parse(sessionStorage.getItem("studio"));
    this.hasDevice = this.studio.hasDevice.split(",");
    this.handler();
    this.swipeLisner_home();
  },
  updated() {},
  computed: {
    wHeight() {
      let wHeight = window.innerHeight;
      return wHeight + "px";
    },
  },
  methods: {
    toAdStudio() {
      this.$router.push("/fi001/" + this.$store.state.adStudioName);
    },
    handler() {
      var t = document.getElementById("datePicke");
      t.addEventListener("change", () => {
        this.callScheule();
      });
    },
    callScheule() {
      this.$axios
        .get(
          "http://" +
            this.$store.state.ipAddress +
            ":7777/reserve/" +
            this.studio.name +
            "/" +
            this.dateInfo
        )
        .then((response) => {
          this.reserve = [];
          this.reserve = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.loginCheck = true;
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          this.possibleReserveTime();
        });
    },
    possibleReserveTime() {
      for (let i = 0; i < 24; i++) {
        let j = i + 1;
        this.possibleReserve[i] = i + "시 ~" + " " + j + "시";
      }
      if (this.reserve.hour != null) {
        this.possibleReserve = [];
        let times = this.reserve.hour.split(",");
        for (let i in times) {
          let j = Number(times[i]) + 1;
          console.log(j);
          this.possibleReserve[i] = times[i] + "시 ~" + j + "시";
        }
      }
      console.log(this.possibleReserve);
    },
    toReserve() {
      if (this.peopleNum == "") {
        this.requireItem = "인원을 입력해주세요";
        this.dialog = true;
        return;
      } else if (this.dateInfo == "") {
        this.requireItem = "날짜를 입력해주세요";
        this.dialog = true;
        return;
      } else if (this.selectedTime == "") {
        this.requireItem = "시간을 입력해주세요";
        this.dialog = true;
        return;
      }
      this.paymentInformation.peopleNum = this.peopleNum;
      this.paymentInformation.dateInfo = this.dateInfo;
      this.paymentInformation.selectedTime = this.selectedTime;
      this.paymentInformation.selectedDevice = this.selectedDevice;
      sessionStorage.setItem(
        "paymentInformation",
        JSON.stringify(this.paymentInformation)
      );
      this.$router.push("/pa002");
    },
    swipeLisner_home() {
      console.log("호출");
      let container = document.querySelector("#container");
      let now = this;
      SwipeListener(container);

      container.addEventListener("swipe", function(e) {
        // console.log("swipe", e.detail);
        var d = e.detail.directions;

        if (d.left) {
          now.$router.push("home");
        }
      });

      container.addEventListener("swiping", function(e) {
        console.log("swiping", e.detail);
      });

      container.addEventListener("swiperelease", function(e) {
        console.log("swiperelease", e.detail);
      });

      container.addEventListener("swipecancel", function(e) {
        console.log("swipecancel", e.detail);
      });
    },
  },
};
