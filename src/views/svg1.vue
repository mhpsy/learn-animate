<script setup>


import {onMounted} from "vue";

onMounted(() => {
    const svgEl = document.querySelector(".box>svg");
    const circle1 = document.querySelector(".box>svg>circle:nth-child(1)");
    const circle2 = document.querySelector(".box>svg>circle:nth-child(2)");

    const svgTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgTextElement.setAttribute("x", "50%");
    svgTextElement.setAttribute("y", "50%");
    svgTextElement.setAttribute("text-anchor", "middle");// 文本锚点
    svgTextElement.setAttribute("dominant-baseline", "middle");// 文本基线
    svgTextElement.setAttribute("font-size", "50px");// 文本大小
    svgTextElement.setAttribute("fill", "red");// 文本颜色
    svgTextElement.setAttribute("font-family", "sans-serif");// 文本字体
    svgTextElement.setAttribute("font-weight", "bold");// 文本粗细
    svgTextElement.setAttribute("letter-spacing", "-0.04em");// 字间距
    // svgTextElement.setAttribute("textLength", "100%");// 文本长度
    // svgTextElement.setAttribute("lengthAdjust", "spacingAndGlyphs");// 文本长度调整
    //"spacing"：根据给定的文本长度来调整字母之间的间距，使文本长度与给定的长度相匹配。
    // "spacingAndGlyphs"：同时调整字母之间的间距和字母的形状，使文本长度与给定的长度相匹配。
    svgTextElement.textContent = "11111111";
    // svgTextElement.textContent = "1";
    svgEl.appendChild(svgTextElement);

})

</script>

<template>
    <div class="box">
        <svg viewBox="0 0 500 500" class="svg1">
            <circle cx="100" cy="100" r="100" stroke="green" stroke-width="4" fill="yellow"/>
            <circle cx="300" cy="100" r="100" stroke="green" stroke-width="4" fill="yellow"/>
        </svg>
    </div>
</template>

<style scoped lang="less">
.svg1 {
    width: 500px;
    height: 500px;
}
</style>