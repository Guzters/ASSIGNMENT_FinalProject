<!-- eslint-disable prettier/prettier -->
<script setup>
import { onMounted } from 'vue'

import CharacterSheet from '@/components/CharacterSheet.vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'

// import useAPI from '@/composables/useApi'

// const { getCharacters, loading } = useAPI()

// onMounted(async () => {
//   await getCharacters()
// })
</script>

<template>
  <!-- <img class="image" src="../assets/DnD5eCharacterSheet.png" /> -->
  <h1>Your Character Sheet Right Here !</h1>
  <CharacterSheet class="CharShee" />
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto flex flex-col gap-4 py-4;
}
.CharShee {
  @apply py-10 px-40;
}
</style>
