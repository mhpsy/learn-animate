<script setup>
import {onMounted, ref} from "vue";
import {gsap} from "gsap/all";

const boxes = ref([]);
const box = (el) => {
    boxes.value.push(el)
}


onMounted(() => {
    gsap.to(boxes.value, {
        // x: 100,// 水平移动
        // y: 100,// 垂直移动
        // rotation: 360,// 旋转
        // skewX: -45,// 水平倾斜
        // skewX: 45,// 水平倾斜
        // skewY: 45,// 垂直倾斜 如果同时设置水平和垂直倾斜，同样的值，会出现不同的效果
        // scale: .2,// 缩放

        // x: "+=100",
        // x: (i) => {
        //     return i * 100
        // },//第一个元素移动0px，第二个元素移动100px，第三个元素移动200px

        // x: '40vw',

        // y: () => window.innerHeight / 2,

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
        <div v-for="i in 5" :key="i" :ref="box" class="box"></div>
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