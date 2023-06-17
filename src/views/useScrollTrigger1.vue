<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted, ref} from "vue";

gsap.registerPlugin(ScrollTrigger);
const s = ref()

// onMounted(() => {
//     console.log(s.value)
//
//     console.log(gsap)
//     gsap.to(s.value, {
//             scrollTrigger: {
//                 trigger: s.value,
//                 toggleActions: "restart none none none",
//                 top: "top top",
//                 end: "+=300",
//             },
//             x: 400,
//             rotation: 360,
//             duration: 4,
//         },
//     )
// })

onMounted(() => {
    console.log(s.value)
    const g = gsap.to(s.value, {
        scrollTrigger: {
            trigger: s.value,
            x: 400,
            markers: true,
        },
    })
    g.play()
})

// onMounted(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const scrollTriggerInstance = ScrollTrigger.create({
//         trigger: s.value,
//         toggleActions: "restart none none none",
//     });
//     gsap.to(s.value, {
//         scrollTrigger: scrollTriggerInstance,
//         x: 400,
//         rotation: 360,
//         duration: 4,
//     });
// });


// onMounted(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(".box", {
//             x: 300,
//             duration: 3,
//             rotation: 360,
//             scrollTrigger: {
//                 trigger: ".box", //觸發得物件
//                 // (物件開始位置, 卷軸開始位置) top center bottom px
//                 start: "top top",
//                 //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
//                 end: "+=300",
//                 pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
//                 scrub: true, // 物件動畫根據卷軸捲動程度跑
//                 toggleClass: "active", // 增加移除的class，class名稱須為字串
//                 markers: true // 顯示標記
//             }
//         }
//     )
// })

</script>

<template>
    <div class="box">
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div ref="s" class="s"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
        <div class="x"></div>
    </div>
</template>

<style scoped lang="less">
.box {
    //height: 300vh;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    .x {
        height: 200px;
        width: 1px;
    }

    .s {
        width: 100px;
        height: 100px;
        background-color: powderblue;
    }
}
</style>