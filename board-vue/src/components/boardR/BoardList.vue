<template>
    <div>
        <h1 class="underline">도서 목록</h1>
        <div style="text-align: right">
            <button style="min-width: 120px" @click="moveWrite">도서 등록</button>
        </div>
        <div v-if="getTotalCnt() > 0">
            <table id="article-list">
                <colgroup>
                    <col style="width: 5%" />
                    <col style="width: 65%" />
                    <col style="width: 10%" />
                    <col style="width: 5%" />
                    <col style="width: 15%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <board-list-item v-for="article in articles" :article="article" :key="article.articleNo" @viewArticle="moveView"></board-list-item>
                </tbody>
            </table>
        </div>
        <div class="text-center" v-else>게시글이 없습니다.</div>
    </div>
</template>

<script>
import BoardListItem from "./BoardListItem.vue";
export default {
    name: "BoardList",
    components: {
        BoardListItem,
    },
    data() {
        return {
            articles: [],
        };
    },
    created() {
        // 비동기
        // TODO : 글목록 얻기.
        let articleList = JSON.parse(localStorage.getItem("articleList"));
        if (articleList != null || articleList != undefined) {
            this.articles = articleList;
        } else {
            this.articles = [
                {
                    articleNo: 3,
                    userName: "권영재",
                    subject: "안녕하세요",
                    hit: 11,
                    registerTime: "2023-05-08 17:03:15",
                },
                {
                    articleNo: 2,
                    userName: "김싸피",
                    subject: "안녕하세요5",
                    hit: 14,
                    registerTime: "2023-05-08 14:13:15",
                },
                {
                    articleNo: 1,
                    userName: "박싸피",
                    subject: "안녕하세요4",
                    hit: 43,
                    registerTime: "2023-05-07 11:03:15",
                },
            ];
            localStorage.setItem("articleList", JSON.stringify(this.articles));
        }
    },
    methods: {
        moveWrite() {
            this.$router.push("/board/write");
        },
        getTotalCnt() {
            return this.articles.length;
        },
        moveView(article) {
            console.log(article);
            this.$emit("articleToBoard", article);
        },
    },
};
</script>

<style></style>
