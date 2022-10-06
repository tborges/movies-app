<script setup>
import { defineProps } from "vue";
const props = defineProps({
  rating: Number,
});
</script>

<template>
  <!-- ${value < 50 && "text-yellow-300"}
					${value >= 50 && value <= 85 && "text-purple-500"}
					${value > 85 && "text-green-400/60"} -->
  <div class="relative w-12">
    <svg class="-rotate-90" viewBox="0 0 120 120" stroke-width="6">
      <circle
        class="text-gray-50/20"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
      />

      <circle
        :class="{
          'text-red-500': rating < 45,
          'text-yellow-300': rating >= 45 && rating < 85,
          'text-green-400/60': rating >= 85,
        }"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="currentColor"
        pathLength="100"
        stroke-dasharray="100"
        :stroke-dashoffset="100 - rating"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>

    <div
      class="
        absolute
        inset-0
        flex
        items-center
        justify-center
        text-[9px]
        font-bold
      "
    >
      {{ rating }}%
    </div>
  </div>
</template>