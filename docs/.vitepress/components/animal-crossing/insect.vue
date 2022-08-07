<template>
  <div class="my-6 border rounded-full">
    <input
      v-model="keyword"
      placeholder="输入昆虫名称"
      class="w-full py-3 px-6 text-sm"
    />
  </div>
  <div class="h-128 grid grid-cols-3 lg:grid-cols-6 gap-6 overflow-auto">
    <div
      v-for="item in list"
      :key="item.name"
      class="flex flex-col items-center"
    >
      <img :src="item.image" class="w-16 h-16" />
      <span class="mb-1 text-xs">{{ item.name }}</span>
      <div
        class="flex items-center text-blue-900 text-opacity-50 text-xs dark:text-blue-100 dark:text-opacity-50"
      >
        <img src="/animal-crossing/money.png" class="w-3.5 h-3.5 mr-0.5" />
        <span>{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DATA from "../../data/animal-crossing/insect";

const keyword = ref("");
const list = computed(() =>
  DATA.sort((a, b) => a.price - b.price).filter(
    (item) =>
      item.name.includes(keyword.value) || item.pinyin.includes(keyword.value)
  )
);
</script>
