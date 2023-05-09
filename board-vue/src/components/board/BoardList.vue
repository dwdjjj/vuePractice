<template>
    <div>
        <h1 class="underline">도서 목록</h1>
        <div style="text-align: right">
            <button style="min-width: 120px" @click="movePage">도서 등록</button>
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
        this.articles = [
            {
                articleNo: 10,
                userName: "안효인",
                subject: "안녕하세요",
                hit: 10,
                registerTime: "2023-05-08 17:03:15",
            },
            {
                articleNo: 9,
                userName: "김싸피",
                subject: "안녕하세요2",
                hit: 102,
                registerTime: "2023-05-08 14:13:15",
            },
            {
                articleNo: 8,
                userName: "박싸피",
                subject: "안녕하세요7",
                hit: 24,
                registerTime: "2023-05-07 11:03:15",
            },
        ];
    },
    methods: {
        movePage() {
            this.$store.commit("SET_FLAG", "글쓰기");
        },
        getTotalCnt() {
            return this.articles.length;
        },
        moveView(article) {
            console.log(article);
            this.$emit("articleToBoard", article);
            this.$store.commit("SET_FLAG", "글보기");
        },
    },
};
</script>

<style></style>
