<script setup>
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const boxes = ref([])
const box = (el)=>{
    boxes.value.push(el)
}

onMounted(()=>{
    console.log(boxes.value)
   const tween =  gsap.to(boxes.value,{
        x: 200,
        y: 200,
        stagger: .5,
        duration: 1,
       repeat:-1,
       yoyo:true,
        ease: "bounce",
        backgroundColor: "#8d3dae",
        onComplete: ()=>{
            console.log("动画完成")
        }
    })

    setInterval(()=>{
        tween.paused() ? tween.play() : tween.pause()
    },1000)
})
</script>

<template>
    <div class="controlling">
        <div class="box" v-for="i in 3" :key="i" :ref="box" ></div>
    </div>
</template>

<style scoped lang="less">
    .box {
        width: 100px;
        height: 100px;
        background-color: powderblue;
        margin: 100px;
    }

</style>