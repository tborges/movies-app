<script setup>
const props = defineProps({
  outOf: {
    type: Number,
    default() {
      return 5;
    },
  },
  value: {
    type: Number,
    default() {
      return 5;
    },
  },
  color: {
    type: String,
    default() {
      return "#F7CD42";
    },
  },
});

const starPaths = {
  empty:
    "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
  half: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
  full: "M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z",
};

const ratingArray = Array(!!props.outOf ? props.outOf : 5)
  .fill("")
  .map((_, index) => {
    const value = props.value;
    let star = value > index && value - index >= 1 ? "full" : "empty";
    if (value > index && value - index < 1) star = "half";

    return starPaths[star];
  });
</script>

<template>
  <div>
    <div class="inline-flex items-center gap-1">
      <svg
        v-for="(path, index) in ratingArray"
        :key="index"
        class="w-6 h-6"
        :stroke="color"
        viewBox="0 0 24 24"
      >
        <path :d="path" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
svg {
  fill: transparent;
  animation: 0.5s pulse forwards 0.1s;
}

svg:nth-of-type(2) {
  animation-delay: 0.2s;
}

svg:nth-of-type(3) {
  animation-delay: 0.25s;
}

svg:nth-of-type(4) {
  animation-delay: 0.3s;
}

svg:nth-of-type(5) {
  animation-delay: 0.35s;
}

@keyframes pulse {
  from {
    fill: transparent;
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
    fill: #f7cd42;
  }
}
</style>