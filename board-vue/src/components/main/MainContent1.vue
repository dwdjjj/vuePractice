<template>
    <div>
        <h1>배포 (ssafyvue)board 가져오기</h1>
        <table>
            <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
            <tr v-for="article in boardlist" :key="article.articleno">
                <td>{{ article.articleno }}</td>
                <td>{{ article.subject }}</td>
                <td>{{ article.userid }}</td>
                <td>{{ article.regtime }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MainContent1",
    data() {
        return {
            boardlist: [],
        };
    },
    created() {
        const url = "http://localhost:9999/vue/board";

        axios.get(url).then((response) => {
            // console.log(response);
            this.boardlist = response.data;
        });
    },
};
</script>

<style>
table {
    width: 90%;
    margin: auto;
}
</style>
