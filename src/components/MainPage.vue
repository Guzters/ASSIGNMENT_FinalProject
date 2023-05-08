<!-- eslint-disable prettier/prettier -->
<script setup>
import CharacterSheet from '@/components/CharacterSheet.vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'
</script>

<template>
  <!-- <img class="image" src="../assets/DnD5eCharacterSheet.png" /> -->
  <CharacterSheet class="CharShee" />
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto flex flex-col gap-4 py-4;
}
.CharShee {
  @apply py-10 px-60;
}
</style>
