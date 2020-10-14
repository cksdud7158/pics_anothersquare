<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <img id="imgBtn" src="@/assets/img/pa/mapView.png" v-on="on" />
      </template>
      <v-card>
        <Map :address="address" />
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
</template>

<script src="@/assets/js/sp/spo003.js"/>
<style scoped src="@/assets/css/sp/spo003.css">
</style>
