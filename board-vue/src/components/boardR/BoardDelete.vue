<template>
    <div class="regist">
        <h1>SSAFY 글 삭제</h1>
        <div>삭제중....</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "BoardDelete",
    data() {
        return { no: String };
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글을 삭제.
        let url = "http://localhost:9999/vue/board";
        this.no = this.$route.params.no;
        console.log(this.$route.params.no);
        url += `/${this.no}`;
        axios.delete(url);
    },
};
</script>

<style></style>
