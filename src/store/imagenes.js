import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items(state){
      return state.items;
    }
  },
  mutations: {
    llenarItems(state, data){
      state.items = data; 
    }
  },
  actions: {
    async cargarImagenes({commit}) {
      try {
        const settings = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=100";
        const data = await fetch(url, settings);
        const json = await data.json();
        //this.items = json;
        commit('llenarItems' , json)
      } catch (err) {
        console.log(err);
      }
    },
  },
 
}
