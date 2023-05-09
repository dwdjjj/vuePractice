import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showflag: "선택한",
    },
    getters: {
        getFlagValue: function (state) {
            return state.showflag;
        },
    },
    mutations: {
        SET_FLAG(state, value) {
            state.showflag = value;
            console.log("mutation setFlag test" + state.showflag);
        },
    },
    actions: {},
    modules: {},
});
