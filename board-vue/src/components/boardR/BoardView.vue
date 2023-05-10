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
                <a href="" @click.prevent @click="moveModify" class="btn">수정</a>
                <a href="" @click.prevent @click="moveDelete" class="btn">삭제</a>
                <a href="" @click.prevent @click="moveList" class="btn">목록</a>
            </div>
        </div>
    </div>
</template>

<script>
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
        console.dir(this.$route); // 현재 호출된 해당 라우터 정보
        this.no = this.$route.params.no;
        console.log(this.no);
        let articles = JSON.parse(localStorage.getItem("articleList"));
        console.dir(articles);
        for (let i = 0; i < articles.length; i++) {
            if (articles[i].articleNo == this.no) {
                this.article = articles[i];
            }
        }
    },
    methods: {
        moveModify() {
            this.$router.push({
                name: "boardmodify",
                params: {
                    name: this.article.userName,
                    subject: this.article.subject,
                    content: this.article.contnet,
                    articleNo: this.article.articleNo,
                },
            });
        },
        moveList() {
            this.$router.push("/board/list");
        },
        moveDelete() {
            this.$router.push({
                name: "boarddelete",
                params: { no: this.article.articleNo },
            });
        },
    },
};
</script>

<style></style>
