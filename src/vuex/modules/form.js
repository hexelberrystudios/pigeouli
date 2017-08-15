import Vue from 'vue';

const formModule = {
  // namespace this module so that it doesn't collide with other store behavior
  namespaced: true, // -> getters['form/*']
  // default values
  state: { fields: {} },
  // directly update the store
  mutations: {
    // add/update form field to current form
    UPDATE_FIELD: (state, field) => {
      // when updating properties in objects, use Vue.set to let
      // Vue know that the object has been updated
      Vue.set(state.fields, field.name, field.value);
    },
    // reset all form state
    RESET_FORM: (state) => {
      state.fields = {};
    }
  },
  // update the store event handler
  actions: {
    updateField({ commit }, field) { commit('UPDATE_FIELD', field); },
    resetForm({ commit }) { commit('RESET_FORM'); }
  }
};

export default formModule;
