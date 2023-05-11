<template>
    <div>
        <h1>실습 (ssafyvue)book 가져오기</h1>
        <table>
            <tr>
                <th>도서번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>가격</th>
                <th>이미지</th>
            </tr>
            <tr v-for="book in books" :key="book.isbn">
                <td>{{ book.isbn }}</td>
                <td class="link-detail" @click="mvBookDetail(book.isbn)">
                    {{ book.title }}
                </td>
                <td>{{ book.author }}</td>
                <td>{{ book.price }}</td>
                <td>{{ book.img || "none" }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MainContent2",

    data() {
        return {
            books: [],
        };
    },
    created() {
        const url = "http://localhost:9998/book";
        axios.get(url).then((res) => {
            // console.log(res);
            this.books = res.data;
        });
    },
    methods: {
        mvBookDetail(isbn) {
            this.$router.push(`/main/${isbn}`);
        },
    },
};
</script>

<style>
td.link-detail {
    font-weight: bold;
}
td.link-detail:hover {
    color: rgb(205, 243, 33);
    cursor: pointer;
}
</style>
