<template>
  <main class="">
    <Button
      class="absolute bottom-10 left-10"
      text="Sign out"
      @click="signOut"
    ></Button>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { account } from "../api";
import Button from "../components/Button.vue";

const route = useRoute();
const router = useRouter();
const session = route.meta.session;

async function signOut() {
  console.log("signing out...");
  await account.deleteSession("current");
  await router.push({ name: "login" });
}
</script>
