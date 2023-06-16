<script setup>
import {onMounted, ref} from "vue";
import {gsap} from "gsap";

const boxes = ref([]);

const box = (el) => {
    boxes.value.push(el)
}

onMounted(() => {

    gsap.from(boxes.value, {
        x: -100,
        opacity: 0,
        scale: 0,
        stagger: .5,
        duration: 1,
        ease: "power1.inOut",
        backgroundColor: "#8d3dae",
        onComplete: () => {
            console.log("动画完成")
        }
    })

})


</script>
<template>
    <div class="about">
        <div v-for="i in 3" :key="i" class="box" :ref="box"></div>
    </div>
</template>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: powderblue;
    margin: 100px;
}
</style>