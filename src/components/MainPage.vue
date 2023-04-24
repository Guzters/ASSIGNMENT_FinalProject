<!-- eslint-disable prettier/prettier -->
<script setup>
import MainSearch from '@/components/MainSearch.vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'
</script>

<template>
  <div class="wrapper">This is the layout of the character sheet, as in how it is suppposed to look like.</div>
  <div class="wrapper">
    The finaly product will feature some sort of nice little table that will contain the stats of the character.
  </div>
  <img class="image" src="../assets/DnD5eCharacterSheet.png" />
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto flex flex-col gap-4 py-4;
}
.image {
  @apply py-6 px-60;
}
</style>
