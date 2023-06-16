<script setup>
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const boxArr = ref([])
const boxes = (el) => {
    boxArr.value.push(el)
}

const colors = [
    '#FF69B4', '#00BFFF', '#FFD700',
    '#32CD32', '#9370DB', '#FFA500',
    '#FF6347', '#40E0D0', '#FFC0CB',
    '#7B68EE'
]

onMounted(() => {
    const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
        defaults:{
            duration:0.5,
        }
    });
    boxArr.value.forEach((item, index) => {
        timeline.to(item, {
            // x: 600,
            rotation: 360,
            // opacity: 0,
            // scale: 0,
            // delay:()=>{
            //   return Math.random()*2
            // },
            // duration: () =>  Math.random() * 2,
            // duration:1,
            ease: "power1.inOut",
            onComplete: () => {
                // console.log("动画完成")
            }
        })
    })
})

</script>

<template>
    <div class="timeline">
        <div class="box"  :ref="boxes" v-for="i in 5" :key="i" :style="{backgroundColor:colors[i]}"></div>
    </div>
</template>

<style scoped lang="less">
.timeline {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}

.box {
    width: 100px;
    height: 100px;
    margin: 100px;
    border-radius: 20px;
}
</style>