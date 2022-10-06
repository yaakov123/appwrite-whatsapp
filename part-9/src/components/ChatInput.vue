<template>
  <main
    class="w-full h-[55px] bg-gray-100 flex items-center justify-between px-5"
  >
    <Input
      type="text"
      v-model="messageText"
      class="w-10/12 flex-1"
      placeholder="Type a message"
    />
    <div class="flex items-center h-full ml-4">
      <PaperAirplaneIcon class="h-6 w-6 cursor-pointer" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { PaperAirplaneIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
import Input from "./Input.vue";

const messageText = ref("");
</script>
