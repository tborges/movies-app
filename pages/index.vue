<script setup>
import { ref, watchEffect } from "vue";
import { fetchMovies } from "@/providers/api";

let loading = ref(false);
let type = ref("");
let movies = ref([]);

watchEffect(async () => {
  loading.value = true;
  movies.value = [];

  const res = await fetchMovies(type.value);

  loading.value = false;
  movies.value = res;
});
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <div
      class="
        sticky
        top-0
        z-10
        bg-gray-800
        border-b border-white/5
        h-16
        px-6
        flex
        items-center
        justify-between
      "
    >
      <h1 class="font-serif text-xl font-bold">Movie Discovery</h1>

      <div class="h-full flex items-center gap-3">
        Filter

        <div class="relative">
          <select
            v-model="type"
            class="
              bg-transparent
              border
              text-base
              py-1
              px-3
              rounded-full
              w-32
              appearance-none
            "
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="opacity-70 absolute top-0 bottom-0 my-auto right-2.5 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-6">
      <Loader :size="80" />
    </div>

    <div v-else class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      <MovieItem :key="movie.imdbID" v-for="movie in movies" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem";
import Loader from "@/components/Loader";

export default {
  name: "home",

  components: {
    MovieItem,
    Loader,
  },
};
</script>
