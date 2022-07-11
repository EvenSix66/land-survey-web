<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar
      app
      color="white"
    >
      <v-container class="py-0 fill-height" fluid>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>工业用地信息采集</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          href="/"
          text>
          首页
        </v-btn>
        <v-btn
          href="/addInfo"
          text>
          信息填报
        </v-btn>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    drawer: false,
  }),
};
</script>
