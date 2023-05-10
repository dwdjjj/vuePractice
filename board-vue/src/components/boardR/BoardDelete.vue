<template>
    <div class="regist">
        <h1>SSAFY 글 삭제</h1>
        <div>삭제중....</div>
    </div>
</template>

<script>
export default {
    name: "BoardDelete",
    data() {
        return { no: String };
    },
    created() {
        // 비동기
        // TODO : 글번호에 해당하는 글을 삭제.
        console.dir(this.$route);
        this.no = this.$route.params.no;
        console.log(this.no);
        let articles = JSON.parse(localStorage.getItem("articleList"));
        for (let i = 0; i < articles.length; i++) {
            if (this.no === articles[i].articleNo) {
                articles.splice(i, 1);
                i--;
            }
        }
        console.dir(articles);
        localStorage.setItem("articleList", JSON.stringify(articles));
    },
};
</script>

<style></style>
