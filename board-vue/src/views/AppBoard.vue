<template>
    <div>
        <h2>Vue를 이용한 게시판(컴포넌트 선택)</h2>
        <board-list v-if="checkValue('글목록')" @articleToBoard="detailArticle"></board-list>
        <board-write v-else-if="checkValue('글쓰기')" @setArticle="getArticle"></board-write>
        <board-view v-else-if="checkValue('글보기')" :article="article" @modify="modifyArticle"></board-view>
        <board-modify v-else-if="checkValue('글수정')" :articleProps="this.article"></board-modify>
        <board-delete v-else-if="checkValue('글삭제')" :article="this.article"></board-delete>
        <app-user v-else-if="checkValue('로그인')"></app-user>
    </div>
</template>

<script>
import BoardList from "@/components/board/BoardList.vue";
import BoardWrite from "@/components/board/BoardWrite.vue";
import BoardModify from "@/components/board/BoardModify.vue";
import BoardView from "@/components/board/BoardView.vue";
import BoardDelete from "@/components/board/BoardDelete.vue";
import AppUser from "./AppUser.vue";

export default {
    name: "AppBoard",
    components: {
        BoardList,
        BoardWrite,
        BoardModify,
        BoardView,
        AppUser,
        BoardDelete,
    },
    data() {
        return {
            article: {},
        };
    },
    methods: {
        checkValue: function (s) {
            // console.log(this.$store.state.showflag);
            // console.log("인자 : " + s);
            if (this.$store.state.showflag == s) {
                // console.log(s);
                return true;
            } else return false;
        },
        getArticle(article) {
            console.log(article);
            this.article = article;
            this.$store.commit("SET_FLAG", "글보기");
        },
        detailArticle(article) {
            console.log(article);
            this.article = article;
        },
        modifyArticle(article) {
            console.log("글상세조회 -> 수정으로", article);
            this.article = article;
            console.dir(this.article);
            this.$refs.child_component.article = article;
        },
    },
};
</script>

<style>
.underline {
    display: inline-block;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, cyan 30%);
}

input,
textarea,
.view {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #787878;
    font-size: medium;
}

label {
    display: inline-block;
    width: 80px;
}

button,
.btn {
    width: 8%;
    background-color: #d0d3d0;
    color: rgb(80, 82, 79);
    padding: 14px 20px;
    margin: 8px 10px;
    border: 1px solid #787878;
    border-radius: 4px;
    font-size: large;
    cursor: pointer;
}

#article-list {
    border-collapse: collapse;
    width: 100%;
}

#article-list thead {
    background-color: #ccc;
    font-weight: bold;
}

#article-list td,
#article-list th {
    text-align: center;
    border-bottom: 1px solid #ddd;
    height: 50px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

.regist {
    padding: 10px;
}

.regist_form {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
