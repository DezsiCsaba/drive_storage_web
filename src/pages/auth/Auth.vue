<template>
  <div class="q-page q-layout-padding flex flex-center">
    <div class="q-pa-md">
      <q-card style="min-width: 300px; max-width: 450px">
        <AsyncLogin></AsyncLogin>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
}
</script>

<script setup>
import {defineAsyncComponent} from "vue";

const AsyncLogin = defineAsyncComponent(()=>import('../../components/auth/Login.vue'))
</script>
