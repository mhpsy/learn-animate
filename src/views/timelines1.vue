<script setup>
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const boxArr = ref([])
const boxes = (el) => {
    boxArr.value.push(el)
}

onMounted(() => {

    const timeline = gsap.timeline();

    boxArr.value.forEach((item, index) => {
        timeline.from(item, {
            x: -100,
            opacity: 0,
            scale: 0,
            duration: () => (index + 1) * 0.3,
            ease: "power1.inOut",
            backgroundColor: "#8d3dae",
            onComplete: () => {
                console.log("动画完成")
            }
        })
    })
})

</script>

<template>
    <div class="timeline">
        <div class="box" :ref="boxes" v-for="i in 8" :key="i"></div>
    </div>
</template>

<style scoped lang="less">
.timeline {
    height: 100vh;
}

.box {
    width: 100px;
    height: 100px;
    background-color: powderblue;
    margin: 100px;
}
</style>