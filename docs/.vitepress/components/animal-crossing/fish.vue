<template>
  <div class="py-3 px-6 my-6 border rounded-full">
    <input v-model="keyword" placeholder="输入鱼类名称" class="w-full" />
  </div>
  <div class="h-32 grid grid-cols-6 overflow-auto">
    <div v-for="f in fishList" :key="f.name" class="flex flex-col items-center">
      <img :src="withBase(imagePrefix + f.image)" class="w-16 h-16" />
      <span class="mb-1 text-sm">{{ f.name }}</span>
      <div class="flex items-center text-blue-900 text-opacity-50 text-xs">
        <img src="/animal-crossing/money.png" class="w-3 h-3 mr-0.5" />
        <span>{{ f.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Fish } from "../../constants/animal-crossing";
import { withBase } from "vitepress";
const imagePrefix = "animal-crossing/";

const keyword = ref("");
const fishList = computed(() =>
  Fish.sort((a, b) => a.price - b.price).filter(
    (f) => f.name.includes(keyword.value) || f.pinyin.includes(keyword.value)
  )
);
</script>
