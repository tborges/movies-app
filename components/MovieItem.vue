<template>
  <div class="bg-gray-800 rounded overflow-hidden shadow-lg flex p-3">
    <img
      class="flex-shrink-0 bg-gray-500 w-[120px] lg:w-1/3 object-cover"
      :src="movie.Poster"
      :alt="movie.Title"
    />
    <div class="px-6 py-4 pb-2">
      <div class="mb-2 flex items-center gap-3">
        <div class="flex items-center">
          <Rating :rating="movie.Rating" />
        </div>
        <div class="flex flex-col">
          <h3 class="font-bold text-lg">{{ movie.Title }}</h3>
          <span class="-mt-0.5 opacity-80">{{ movie.Year }}</span>
          <Star />
        </div>
      </div>

      <div class="py-2 mb-1">
        <span
          class="
            rounded-full
            py-2
            px-2.5
            border
            text-xs
            leading-none
            capitalize
          "
        >
          {{ movie.Type }}
        </span>
      </div>

      <p class="text-gray-400 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem.
      </p>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Rating";
import Star from "@/components/Star";

export default {
  name: "movieItem",

  components: {
    Rating,
    Star,
  },

  props: {
    movie: {
      type: Object,
      default: "",
    },
  },
};
</script>
