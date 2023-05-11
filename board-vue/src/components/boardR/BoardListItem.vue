<template>
    <tr>
        <td>{{ article.articleno }}</td>
        <td @click="viewArticle(article.articleno)">{{ article.subject }}</td>
        <td>{{ article.userid }}</td>
        <td>{{ article.hit }}</td>
        <td>{{ article.regtime }}</td>
    </tr>
</template>

<script>
export default {
    name: "BoardListItem",
    props: {
        article: Object,
    },
    methods: {
        viewArticle(articleNo) {
            this.$router.push(`/board/view/${articleNo}`);
        },
    },
};
</script>

<style></style>
