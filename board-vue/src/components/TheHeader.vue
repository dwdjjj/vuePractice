<template>
    <div class="header">
        <img src="../assets/ssafy_logo.png" alt="" />
        <div>
            <h3>{{ $store.state.showflag }} 컴포넌트 보여주기</h3>
        </div>
        <div>
            <a href="" @click.prevent v-for="(item, index) in flagArr" :flag="item" :key="index" @click="setFlag(item)">{{ item }} </a>
        </div>
        <!-- <div><a href="">로그인</a> | <a href="">게시판</a> | <a href="" @click.prevent @click="toggleFlag()">글쓰기</a> | {{ $store.state.showflag }}</div> -->
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
        // toggleFlag() {
        //     this.$store.state.showflag = event.currentTarget.innerText;
        //     console.log(this.$store.state.showflag);
        // },
        setFlag(res) {
            this.$store.commit("SET_FLAG", res);
        },
    },
    created() {
        this.flagArr = ["게시판", "글쓰기", "글수정", "글삭제", "로그인"];
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
}

a:hover {
    color: #42b983;
}
</style>
