<template>
  <div id="container" :style="{ height: wHeight }">
    <img
      src="@/assets/img/main/ma002_ad.png"
      id="adImg"
      @click.prevent="toAdStudio"
    />
    <div id="first">
      <h1>{{ studio.name }}</h1>
      <p>{{ studio.address }}</p>
      <Spo003 id="spo003" :address="studio.address" />
    </div>
    <hr />
    <div>
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <h1 id="modal">{{ requireItem }}</h1>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="dialog = false">
              돌아가기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div id="second">
      <img src="@/assets/img/pa/pa001_icon_people.png" />
      <div id="item">
        <v-text-field
          placeholder="촬영 인원 입력 "
          suffix="명"
          class="pt-4"
          v-model="peopleNum"
        ></v-text-field>
      </div>
      <img src="@/assets/img/pa/pa001_icon_calender.png" />
      <div id="item">
        <!-- 날짜 선택 -->
        <input type="date" v-model="dateInfo" id="datePicke" :min="toDay" />
      </div>
      <img src="@/assets/img/pa/pa001_icon_time.png" />
      <div id="item">
        <!-- 시간 선택 -->
        <select v-model="selectedTime" multiple>
          <option v-for="(item, i) in possibleReserve" :value="item" :key="i">
            {{ item }}
          </option>
        </select>
      </div>
      <img src="@/assets/img/pa/pa001_icon_tool.png" />
      <div id="item">
        <h1>장비 대여 신청 없을시 미기재</h1>
        <select v-model="selectedDevice" id="hasDevice" multiple>
          <option v-for="(item, i) in hasDevice" :value="item" :key="i">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div id="third">
      <img src="@/assets/img/common/reserve.png" @click.prevent="toReserve" />
    </div>
  </div>
</template>

<style scoped src="@/assets/css/remove_css.css"></style>
<script src="@/assets/js/pa/pa001.js" />
<style scoped src="@/assets/css/pa/pa001.css" />
