<script setup>
import {onMounted, ref} from "vue";

const boxArr = ref([])

onMounted(() => {

})
</script>

<template>
    <div class="keyframes">
        <div class="box" :ref="boxes" v-for="i in 3" :key="i"></div>
    </div>
</template>

<style scoped lang="less">


</style>