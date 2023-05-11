<template>
    <div>
        <h1>실습(ssafyvue)book 상세보기</h1>
        <div class="regist">
            <div class="regist_form">
                <label> 도서번호</label>
                <div class="view">{{ book.isbn }}</div>
                <label> 도서제목</label>
                <div class="view">{{ book.title }}</div>
                <label> 저자</label>
                <div class="view">{{ book.author }}</div>
                <label> 가격</label>
                <div class="view">{{ book.price }}</div>

                <label> 내용</label>
                <div class="view">{{ book.content }}</div>

                <div style="padding-top: 15px">
                    <router-link to="`/main/${book.isbn}/modify`" class="btn">수정</router-link>
                    <a href="" class="btn">삭제</a>
                    <a href="/main/book" class="btn">목록</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "MainContent3",
    data() {
        return {
            book: Object,
        };
    },
    created() {
        let url = "http://localhost:9998/book";
        const curUrlArr = location.pathname.split("/");
        console.dir(curUrlArr);
        const isbn = curUrlArr[curUrlArr.length - 1];
        console.log(isbn);
        url += `/${isbn}`;
        axios.get(url).then((response) => {
            console.log(response);
            this.book = response.data;
        });
    },
};
</script>

<style></style>
