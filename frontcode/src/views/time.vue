<template>
  <div>
    <v-select
      v-model="e6"
      :items="time"
      :menu-props="{ maxHeight: '400' }"
      label="예약 시간대를 선택해주세요"
      multiple
      click
    >
    </v-select>
    {{ time }}
  </div>
</template>

<script>
export default {
  props: ["time"],
  data() {
    return {
      e6: []
    };
  }
};
</script>