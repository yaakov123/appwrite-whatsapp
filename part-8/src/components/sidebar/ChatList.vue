<template>
  <main class="divide-y overflow-y-auto">
    <ChatItem v-for="chat in chats" :chat="chat"></ChatItem>
  </main>
</template>
<script setup lang="ts">
import { Models } from "appwrite";
import ChatItem from "./ChatItem.vue";

interface Props {
  chats: Models.Team[];
}

defineProps<Props>();
</script>
