<template>
    <div class="regist">
        <h1 class="underline">SSAFY 글 상세보기</h1>
        <div class="regist_form">
            <label> 글번호</label>
            <div class="view">{{ article.articleno }}</div>
            <label> 글제목</label>
            <div class="view">{{ article.subject }}</div>
            <label> 작성자</label>
            <div class="view">{{ article.userid }}</div>
            <label> 조회수</label>
            <div class="view">{{ article.hit }}</div>
            <label> 작성시간</label>
            <div class="view">{{ article.regtime }}</div>
            <label> 내용</label>
            <div class="view">{{ article.content }}</div>

            <div style="padding-top: 15px">
                <a href="" @click.prevent @click="moveModify" class="btn">수정</a>
                <a href="" @click.prevent @click="moveDelete" class="btn">삭제</a>
                <a href="" @click.prevent @click="moveList" class="btn">목록</a>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/util/http-common";
export default {
    name: "BoardView",
    data() {
        return {
            no: String,
            article: Object,
        };
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글정보 얻기.
        this.articleno = this.$route.params.articleno;
        http.get(`/board/${this.articleno}`).then(({ data }) => {
            this.article = data;
        });
    },
    methods: {
        moveModify() {
            this.$router.push({
                name: "boardmodify",
                params: { articleno: this.article.articleno, article: this.article },
            });
        },
        moveList() {
            this.$router.push("/board/list");
        },
        moveDelete() {
            this.$router.push({
                name: "boarddelete",
                params: { no: this.article.articleno },
            });
        },
    },
};
</script>

<style></style>
