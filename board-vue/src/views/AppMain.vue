<template>
    <div class="main">
        <div class="container">
            <h2>main view 선택</h2>
            <router-link to="/main">게시판(1)</router-link>
            <router-link to="/main/2">책(2)</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "AppMain",
    data() {
        return {
            mapInfo: "지도를 출력할 예정입니다.",
            attractionInfo: "관광지 목록을 출력 할 예정입니다.",
            planInfo: "여행 계획을 출력 할 예정입니다.",
        };
    },
};
</script>

<style scope>
.main-content {
    border: 2px solid black;
    height: 200px;
    width: 80%;
    margin: auto;
    margin-top: 20px;
}
.main thead {
    background-color: #ccc;
    font-weight: bold;
}

.main td,
th {
    text-align: center;
    border-bottom: 1px solid #ddd;
    height: 50px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

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

.regist {
    padding: 10px;
}

.regist_form {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
