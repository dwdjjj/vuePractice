<template>
    <div id="app">
        <the-header></the-header>
        <app-board v-if="checkValue('게시판')"></app-board>
        <board-write v-else-if="checkValue('글쓰기')"></board-write>
        <board-view v-else-if="checkValue('글보기')"></board-view>
        <board-modify v-else-if="checkValue('글수정')"></board-modify>
        <board-delete v-else-if="checkValue('글삭제')"></board-delete>
        <app-user v-else-if="checkValue('로그인')"></app-user>
    </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AppBoard from "./views/AppBoard.vue";
import BoardWrite from "./components/board/BoardWrite.vue";
import BoardView from "./components/board/BoardView.vue";
import BoardModify from "./components/board/BoardModify.vue";
import BoardDelete from "./components/board/BoardDelete.vue";
import AppUser from "./views/AppUser.vue";
export default {
    components: {
        TheHeader,
        AppBoard,
        BoardWrite,
        BoardModify,
        BoardView,
        AppUser,
        BoardDelete,
    },
    methods: {
        checkValue: function (s) {
            console.log(this.$store.state.showflag);
            console.log("인자 : " + s);
            if (this.$store.state.showflag == s) {
                console.log(s);
                return true;
            } else return false;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

a {
    text-decoration: none;
}
</style>
