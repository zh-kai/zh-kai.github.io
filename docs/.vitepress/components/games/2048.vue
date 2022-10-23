<template>
  <div class="game-2048 flex flex-col items-center">
    <h1>Game 2048</h1>

    <div class="my-6">Score: {{ score }}</div>
    <button @click="restart" class="py-2 px-5 outline-none bg-black text-white font-mono font-semibold rounded-lg">
      Restart
    </button>
    <div class="w-2/3 my-12 mx-auto grid grid-rows-4 grid-cols-4 gap-4">
      <div v-for="i in 16" :key="i" class="aspect-square">
        <div
          class="flex justify-center items-center w-full h-full bg-black bg-opacity-25 font-mono text-3xl font-semibold rounded-xl"
        >
          {{ gameStatus[getRow(i)][getCol(i)] || "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const score = ref(0);
const gameStatus = reactive([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]);
const getRow = (index: number) => Math.floor((index - 1) / 4);
const getCol = (index: number) => (index - 1) % 4;

const checkOver = () => {
  return !gameStatus.some((r) => r.includes(0));
};
const random = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const randomGridItem = () => {
  const i = random(1, 16);
  const _current = gameStatus[getRow(i)][getCol(i)];
  _current === 0 ? (gameStatus[getRow(i)][getCol(i)] = random(1, 2) * 2) : randomGridItem();
};
const init = () => {
  randomGridItem();
  randomGridItem();

  document.addEventListener("keydown", (e) => {
    if ([37, 38, 39, 40].includes(e.keyCode)) e.preventDefault();
    switch (e.keyCode) {
      case 38:
        up();
        break;
      case 40:
        down();
        break;
      case 37:
        left();
        break;
      case 39:
        right();
        break;
    }

    if (!checkOver()) {
      randomGridItem();
    }
  });
};

const restart = () => {
  score.value = 0;
  for (let i = 1; i <= 16; i++) {
    gameStatus[getRow(i)][getCol(i)] = 0;
  }
  randomGridItem();
  randomGridItem();
};

const merge = (_before: number, _after: number) => {
  const before = gameStatus[getRow(_before)][getCol(_before)];
  const after = gameStatus[getRow(_after)][getCol(_after)];

  if (before === 0 && after !== 0) {
    gameStatus[getRow(_before)][getCol(_before)] = after;
    gameStatus[getRow(_after)][getCol(_after)] = 0;
  }

  if (before === after) {
    score.value += before;
    gameStatus[getRow(_before)][getCol(_before)] = before * 2;
    gameStatus[getRow(_after)][getCol(_after)] = 0;
  }
};

const up = () => {
  for (let i = 1; i <= 4; i++) {
    for (let j = i; j <= i + 12; j += 4) {
      for (let k = j; k > 4; k -= 4) {
        merge(k - 4, k);
      }
    }
  }
};

const down = () => {
  for (let i = 1; i <= 4; i++) {
    for (let j = i + 12; j >= i; j -= 4) {
      for (let k = j; k < 13; k += 4) {
        merge(k + 4, k);
      }
    }
  }
};

const left = () => {
  for (let i = 1; i <= 13; i += 4) {
    for (let j = i; j < i + 4; j++) {
      for (let k = j; k > i; k--) {
        merge(k - 1, k);
      }
    }
  }
};

const right = () => {
  for (let i = 1; i <= 13; i += 4) {
    for (let j = i + 3; j >= i; j--) {
      for (let k = j; k < i + 3; k++) {
        merge(k + 1, k);
      }
    }
  }
};

onMounted(init);
</script>
