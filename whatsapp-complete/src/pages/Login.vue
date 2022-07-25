<template>
  <main class="flex items-center justify-center w-full h-full">
    <div class="flex-col">
      <h1 class="text-2xl">Login to your account</h1>
      <router-link to="/register" class="text-xs text-blue-700"
        >Create account</router-link
      >
      <div class="mt-8 space-y-4">
        <Input
          type="email"
          placeholder="someone@somewhere.com"
          label="Email"
          v-model="email"
        />
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          v-model="password"
        />
      </div>
      <Button text="Login" class="mt-4" @click="login"></Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { account } from "../api";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  await account.createEmailSession(email.value, password.value);
  router.push({ name: "app" });
}
</script>
