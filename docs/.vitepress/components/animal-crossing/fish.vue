<template>
  <div class="my-6 border rounded-full">
    <input
      v-model="keyword"
      placeholder="输入鱼类名称"
      class="w-full py-3 px-6 text-sm"
    />
  </div>
  <div class="h-128 grid grid-cols-3 lg:grid-cols-6 gap-6 overflow-auto">
    <div v-for="f in fishList" :key="f.name" class="flex flex-col items-center">
      <img :src="f.image" class="w-16 h-16" />
      <span class="mb-1 text-xs">{{ f.name }}</span>
      <div
        class="flex items-center text-blue-900 text-opacity-50 text-xs dark:text-blue-100 dark:text-opacity-50"
      >
        <img src="/animal-crossing/money.png" class="w-3.5 h-3.5 mr-0.5" />
        <span>{{ f.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FISH from "../../data/animal-crossing/fish";
import { withBase } from "vitepress";

const imagePrefix = "animal-crossing/";
const imageSuffix = ".png";

const keyword = ref("");
const fishList = computed(() =>
  FISH.sort((a, b) => a.price - b.price).filter(
    (f) => f.name.includes(keyword.value) || f.pinyin.includes(keyword.value)
  )
);
</script>
