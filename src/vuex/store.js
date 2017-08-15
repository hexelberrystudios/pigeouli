import Vue from 'vue';
import Vuex from 'vuex';
import form from './modules/form';

Vue.use(Vuex);

const defaultState = {
  topics: [],
  count: 0
};

const inBrowser = typeof window !== 'undefined';

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.INITIAL_STATE) || defaultState;

export default new Vuex.Store({
  state,
  modules: {
    form
  }
});
