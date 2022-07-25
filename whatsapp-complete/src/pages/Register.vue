<template>
  <main class="flex items-center justify-center w-full h-full">
    <div class="flex-col">
      <h1 class="text-2xl">Create your account</h1>
      <router-link to="/login" class="text-xs text-blue-700"
        >Existing account</router-link
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

      <Button text="Register" class="mt-4" @click="createAccount"></Button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { account } from "../api";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

async function createAccount() {
  if (!email || !password) return;

  await account.create("unique()", email.value, password.value);
  await account.createEmailSession(email.value, password.value);
  router.push({ name: "app" });
}
</script>
