import Vue from 'vue';
import Vuex from 'vuex';
import form from './modules/form';
import user from './modules/user';

Vue.use(Vuex);

const defaultState = {};

const inBrowser = typeof window !== 'undefined';

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.INITIAL_STATE) || defaultState;

export default new Vuex.Store({
  state,
  modules: {
    form,
    user
  }
});
