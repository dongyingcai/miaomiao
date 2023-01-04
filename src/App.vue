<template>
<!-- 因为切换路由重新渲染影响性能
缓存<keep-alive></keep-alive> -->
    <keep-alive> 
        <router-view/>
    </keep-alive>
</template>

s