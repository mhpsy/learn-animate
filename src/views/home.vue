<script setup>
import {onMounted, ref} from "vue";
import {gsap} from "gsap/all";

const boxes = ref([]);
const box = (el) => {
    boxes.value.push(el)
}


onMounted(() => {
    gsap.from(boxes.value, {
        x: 100,
        y: 100,
        stagger: .5,// 间隔时间 //多个元素的动画，间隔时间
        duration: 1,// 动画持续时间
        // delay: 1,// 动画延迟时间
        // repeat: 3,// 动画重复次数 -1 无限重复
        // yoyo: true,// 动画结束后，反向播放
        // repeatDelay: 1,// 动画重复间隔时间

        ease: "bounce",// 动画缓动效果


        backgroundColor: "#8d3dae",
        onComplete: () => {
            console.log("动画完成")
        }
    })
})
</script>

<template>
    <div class="con">
        <div :ref="box" class="box"></div>
        <!--        <div v-for="i in 5" :key="i" :ref="box" class="box"></div>-->
    </div>
</template>

<style scoped lang="less">
.box {
    width: 100px;
    height: 100px;
    background-color: powderblue;
    margin-bottom: 10px;
}
</style>