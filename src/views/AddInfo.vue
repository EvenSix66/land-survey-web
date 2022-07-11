<template>
  <v-container>
    <v-stepper
      v-model="curStep"
      vertical>
      <v-stepper-step
        :complete="curStep > 1"
        step="1">
        填报基本信息
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-card
          :outlined="true"
          class="mb-2">
          <v-card-text>
            <v-row class="pt-3">
              <v-col cols="3">
                <v-text-field
                  hide-details="true"
                  class="mx-3"
                  label="单位名称"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  class="mx-3"
                  label="社会信用代码"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="mx-3">
            <v-btn
              color="primary"
              @click="curStep = 2">
              继续填报
            </v-btn>
            <v-btn text>
              取消
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  name: "AddInfo",
  data() {
    return {
      curStep: 1,
    }
  },

  mounted() {
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
