<template>
    <div class="regist">
        <h1 class="underline">SSAFY 글 상세보기</h1>
        <div class="regist_form">
            <label> 글번호</label>
            <div class="view">{{ article.articleNo }}</div>
            <label> 글제목</label>
            <div class="view">{{ article.subject }}</div>
            <label> 작성자</label>
            <div class="view">{{ article.userName }}</div>
            <label> 조회수</label>
            <div class="view">{{ article.hit }}</div>
            <label> 작성시간</label>
            <div class="view">{{ article.registerTime }}</div>
            <label> 내용</label>
            <div class="view">{{ article.content }}</div>

            <div style="padding-top: 15px">
                <a href="" @click.prevent @click="moveModify(article)" class="btn">수정</a>
                <a href="" @click.prevent @click="setFlag('글삭제')" class="btn">삭제</a>
                <a href="" @click.prevent @click="setFlag('글목록')" class="btn">목록</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoardView",
    props: ["article"],
    data() {
        return {};
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글정보 얻기.
    },
    methods: {
        setFlag(res) {
            this.$store.commit("SET_FLAG", res);
        },
        moveModify(article) {
            console.log(article);
            this.$emit("viewToBoard", article);
            this.$store.commit("SET_FLAG", "글수정");
        },
    },
};
</script>

<style></style>
