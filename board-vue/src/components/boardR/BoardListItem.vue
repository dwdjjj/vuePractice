<template>
    <tr>
        <td>{{ article.articleNo }}</td>
        <td @click="viewArticle(article.articleNo)">{{ article.subject }}</td>
        <td>{{ article.userName }}</td>
        <td>{{ article.hit }}</td>
        <td>{{ article.registerTime }}</td>
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
