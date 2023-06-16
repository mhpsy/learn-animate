<script setup>
import {onMounted, ref} from "vue";
import {gsap} from "gsap";

const boxArr = ref([])
const boxes = (el) => {
    boxArr.value.push(el)
}

onMounted(() => {
    gsap.to(boxArr.value, {
        keyframes: {
            y: [0, 100, -100, 100, 0],
            ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
            easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
        },
        rotate: 180,
        ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
        duration: 5,
        stagger: 2
    })
})
</script>

<template>
    <div class="keyframes">
        <div class="box" :ref="boxes" v-for="i in 3" :key="i"></div>
    </div>
</template>

<style scoped lang="less">
.keyframes{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
}
.box{
    width: 100px;
    height: 100px;
    background-color: powderblue;
    border-radius: 20px;
    margin: 100px;
}
</style>