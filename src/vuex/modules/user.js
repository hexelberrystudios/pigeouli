import Vue from 'vue';

const userModule = {
  // namespace this module so that it doesn't collide with other store behavior
  namespaced: true, // -> getters['user/*']
  // default values
  state: {},
  getters: {
    get: state => state.user
  },
  // directly update the store
  mutations: {
    UPDATE_USER: (state, user) => {
      state.user = user;
    },
    CLEAR_USER: (state) => {
      state.user = null;
    }
  },
  // update the store event handler
  actions: {
    getUser: ({ commit }) =>
      new Promise((resolve, reject) => {
        const userVar = 'pg_user';
        const cachedUser = localStorage.getItem(userVar);
        const failHandler = function failHandler(userVarLocation, errMsg, promiseReject) {
          commit('CLEAR_USER');
          localStorage.removeItem(userVarLocation);
          console.error(errMsg);
          promiseReject(errMsg);
        };

        if (cachedUser) {
          commit('UPDATE_USER', JSON.parse(cachedUser));
          resolve(cachedUser);
        } else {
          Vue.http.get('/user')
            .then((response) => {
              const errorMsg = 'unable to retrieve user';
              if (response.body) {
                // cache the response
                localStorage.setItem(userVar, JSON.stringify(response.body));
                commit('UPDATE_USER', response.body);
                resolve(response.body.user);
              } else {
                failHandler(userVar, errorMsg, reject);
              }
            }, (response) => {
              failHandler(userVar, response, reject);
            });
        }
      }),
    setUser: ({ commit, state }, user) => {
      localStorage.setItem('pg_user', JSON.stringify(user));
      commit('UPDATE_USER', user);
    }
  }
};

export default userModule;
