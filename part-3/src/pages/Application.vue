<template>
  <main class="w-full h-full flex">
    <Sidebar>
      <ContactsSidebar v-if="sidebarView === SidebarView.CONTACTS" />
    </Sidebar>
  </main>
</template>

<script setup lang="ts">
import Sidebar from "../components/sidebar/Sidebar.vue";
import ContactsSidebar from "../components/sidebar/ContactsSidebar.vue";
import { SidebarView, useGlobalStore } from "../stores/globalStore";
import { computed } from "vue";

const globalStore = useGlobalStore();
const sidebarView = computed(() => globalStore.sidebarView);
</script>
