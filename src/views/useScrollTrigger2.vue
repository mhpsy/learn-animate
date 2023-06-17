<template>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div ref="box" class="box">
        <div class="box-text">box-text</div>
    </div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
    <div class="test">test</div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const box = ref(null);

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(box.value, {
        x: 200,
        y: 200,
        rotate: 360,
        duration: 3,
        scrollTrigger: {
            trigger: box.value,
            start: 'top bottom', // 触发动画的位置，这里是元素进入视口底部开始触发
            end: '+=400', // 动画结束的位置，这里是继续滚动 400px 后触发
            scrub: true, // 启用滚动平滑动画
            markers: true, // 显示调试标记
        },
    });
});

</script>

<style scoped>
.test {
    height: 100vh;
    width: 100%;
    background-color: #ccc;
}

.x {
    height: 200px;
    width: 1px;
}

.box {
    width: 100%;
    height: 100vh;
    background-color: red;
}
</style>