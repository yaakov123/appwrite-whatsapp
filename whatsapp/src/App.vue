<template>
  <h1>Welcome</h1>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { account } from "./api";

onMounted(() => {
  // account.create("unique()", "me@example.com", "password", "Jane Doe").then(
  //   (response) => {
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
});
</script>
