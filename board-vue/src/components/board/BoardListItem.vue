<template>
    <tr>
        <td>{{ article.articleNo }}</td>
        <td @click="viewArticle()">{{ article.subject }}</td>
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
        viewArticle() {
            console.log(this.article);
            this.$emit("viewArticle", this.article);
        },
    },
};
</script>

<style></style>
