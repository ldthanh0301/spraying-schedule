<template>
  <a
    data-calendar-toggler
    :aria-label="$t('calendar.close_calendar')"
    :title="$t('calendar.close_calendar')"
    href="#"
    class="select-none cursor-pointer inline-flex items-center flex-row space-x-2 flex-nowrap text-left text-005743 hover:opacity-80 active:animate-pulse"
    @click.prevent="$emit('tap')"
  >
    <span class="inline-flex items-center justify-center w-6 h-6 flex-shrink-0"
      ><CloseIcon
    /></span>
  
    <span class="font-semibold tracking-m0dt02 text-base">
      {{ configs?.closeText || $t("calendar.close") }}
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CloseIcon from "./assets/close-icon.vue";
import { useEventsStore } from "../../stores/events";
import type { Configs } from "../../stores/events";

const store = useEventsStore();

const configs = computed<Configs>(() => store.getConfigs);
</script>
