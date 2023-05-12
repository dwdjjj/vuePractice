<template>
    <div class="regist">
        <h1>SSAFY 글 삭제</h1>
        <div>삭제중....</div>
    </div>
</template>

<script>
import http from "@/util/http-common";
export default {
    name: "BoardDelete",
    data() {
        return { no: String };
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글을 삭제.
        this.no = this.$route.params.no;
        http.delete(`/board/${this.no}`).then(({ data }) => {
            let msg = "글 삭세지 문제 발생!!";
            console.dir(data);
            if (data == "success") {
                msg = "글 삭제 성공!";
            } else alert(msg);
            this.moveList();
        });
    },
    methods: {
        moveList() {
            this.$router.push({ name: "boardlist" });
        },
    },
};
</script>

<style></style>
