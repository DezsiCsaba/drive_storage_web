import { defineStore } from 'pinia';
import {localAxios} from "src/axios/localAxios";

export const authStore = defineStore('auth', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async pingServer(){
      await localAxios({
        method: 'get',
        url: '/test'
      })
    }
  },
});
