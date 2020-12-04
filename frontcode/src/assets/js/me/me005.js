import SwipeListener from "swipe-listener";

export default {
  data() {
    return {
      user: this.$store.state.user,
    };
  },
  mounted() {
    this.swipeLisner_home();
  },
  computed: {
    wHeight() {
      let wHeight = window.innerHeight;
      return wHeight + "px";
    },
  },
  methods: {
    next1() {
      this.$router.push("/bo001");
    },
    next2() {
      this.$router.push("/me006");
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
