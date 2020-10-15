<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/main/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div id="first">
      <!-- <h1>{{ studio.name }}</h1> -->
      <h1>홍대예셰 뮤직 합주실 연습실</h1>
      <p>{{ studio.address }}</p>
      <Spo003 id="spo003" :address="studio.address" />
    </div>
    <hr />
    <div id="second">
      <img src="@/assets/img/pa/pa001_icon_people.png" />
      <v-text-field
        placeholder="촬영 인원 입력 "
        suffix="명"
        class="pt-4"
      ></v-text-field>
      <img src="@/assets/img/pa/pa001_icon_calender.png" />
      <div>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              readonly
              v-on="on"
              class="pt-4"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.dialog.save(date), callScheule()"
              >OK</v-btn
            >
          </v-date-picker>
        </v-dialog>
      </div>
      <img src="@/assets/img/pa/pa001_icon_time.png" />
      <div>
        <v-select
          v-model="e6"
          :items="reserve"
          :menu-props="{ maxHeight: '400' }"
          label="예약 시간대를 선택해주세요"
          multiple
        ></v-select>
      </div>
      <img src="@/assets/img/pa/pa001_icon_tool.png" />
      <div>
        <span>장비 대여 신청</span> 없을시 미기재
        <div>선택한 장비 내역이 들어갈 곳</div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css">
</style>
<script src="@/assets/js/pa/pa001.js"/>
<style scoped src="@/assets/css/pa/pa001.css" />

