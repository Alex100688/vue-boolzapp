"use strict";
//FUNZIONE PER LEGGERE VUE JS//
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')