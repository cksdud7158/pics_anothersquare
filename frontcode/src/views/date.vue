<template>
  <div>
    <DraggableCal />
    <div id="selected">
      <div id="item">
        <v-select
          v-model="e6"
          :items="states"
          :menu-props="{ maxHeight: '400' }"
          label="예약 시간대를 선택해주세요"
          multiple
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
import DraggableCal from "vue-draggable-cal";

export default {
  components: {
    DraggableCal
  },
  data() {
    return {
      e6: [],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  }
};
</script>

<style scoped>
#selected {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
#item {
  grid-column: 2/4;
}
</style>