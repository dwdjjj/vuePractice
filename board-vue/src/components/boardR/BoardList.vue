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
                    <board-list-item v-for="article in boardlist" :article="article" :key="article.articleno" @viewArticle="moveView"></board-list-item>
                </tbody>
            </table>
        </div>
        <div class="text-center" v-else>게시글이 없습니다.</div>
    </div>
</template>

<script>
import http from "@/util/http-common";
import BoardListItem from "./BoardListItem.vue";
export default {
    name: "BoardList",
    components: {
        BoardListItem,
    },
    data() {
        return {
            boardlist: [],
        };
    },
    created() {
        // 비동기
        // TODO : 글목록 얻기.
        // const url = "http://localhost:9999/vue/board";

        http.get("/board").then((response) => {
            console.log(response);
            this.boardlist = response.data;
        });
    },
    methods: {
        moveWrite() {
            this.$router.push("/board/write");
        },
        getTotalCnt() {
            return this.boardlist.length;
        },
        moveView(article) {
            console.log(article);
            this.$emit("articleToBoard", article);
        },
    },
};
</script>

<style></style>
