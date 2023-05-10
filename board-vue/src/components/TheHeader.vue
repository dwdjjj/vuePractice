<template>
    <div class="header">
        <img src="../assets/ssafy_logo.png" alt="" />
        <!-- <div>
            <h3>{{ $store.state.showflag }} 컴포넌트 보여주기</h3>
            <a href="" @click.prevent v-for="(item, index) in flagArr" :flag="item" :key="index" @click="setFlag(item)">{{ item }} </a>
        </div> -->

        <!-- <div><a href="">로그인</a> | <a href="">게시판</a> | <a href="" @click.prevent @click="toggleFlag()">글쓰기</a> | {{ $store.state.showflag }}</div> -->
        <div>
            <h3>Router 사용해서 이동</h3>
            <router-link to="/board">list</router-link>
            <router-link to="/board/write">write</router-link>
            <router-link to="/login">login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
            flagArr: [],
        };
    },
    methods: {
        setFlag(res) {
            this.$store.commit("SET_FLAG", res);
        },
    },
    created() {
        this.flagArr = ["글목록", "글쓰기", "글수정", "글삭제"];
    },
};
</script>

<style scope>
img {
    width: 150px;
}

.header {
    padding: 30px;
    text-align: center;
    box-shadow: 0px 1px 10px rgba(159, 157, 157, 0.3);
}

a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 10px;
}

a:hover {
    color: #42b983;
}
</style>
