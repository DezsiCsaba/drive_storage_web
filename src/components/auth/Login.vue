<template>
  <div class="q-page q-layout-padding">
    <div class="text-h6">Bejelentkezés</div>

    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="email"
          label="Email Adress"
        ></q-input>
        <q-input
          filled
          v-model="pass"
          label="Password"
        ></q-input>

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
}
</script>

<script setup>
import {onMounted, ref} from "vue";
import {authStore} from "stores/auth";
import {QNotifier} from "src/services/QNotifier";
import {useQuasar} from "quasar";
const q = useQuasar()

const store = authStore()

const email = ref('')
const pass = ref('')

onMounted(async () => {
  await store.pingServer()
})

const onSubmit = ()=>{

}
</script>
