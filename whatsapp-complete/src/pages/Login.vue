<template>
  <section class="w-full h-full flex flex-col items-center justify-center">
    <div class="w-80 flex flex-col items-center">
      <img :src="whatsapp" class="w-24" />

      <h1 class="text-3xl mt-2 font-bold">Login to your account</h1>
      <p class="text-sm text-gray-500 mt-1">
        Or
        <span class="text-green-500"
          ><router-link to="/register">create a new one</router-link></span
        >
      </p>

      <Input
        type="text"
        label="Email"
        placeholder="someone@gmail.com"
        class="w-full mt-10"
        ref="email"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password here..."
        class="w-full mt-5"
        ref="password"
      />
      <Button text="Login" class="mt-10 w-full" @click="login"></Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { account } from "../api";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import whatsapp from "../assets/whatsapp.webp";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  await account.createEmailSession(email.value, password.value);
  router.push({ name: "app" });
}
</script>
