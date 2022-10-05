<template></template>

<script setup lang="ts">
import { Contact } from "../../api/database";

interface Props {
  contacts: Contact[];
}

defineProps<Props>();
</script>
