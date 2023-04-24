<template>
  <h1>Database Page</h1>
  <h1>This is where only an "admin" can enter and see which characters have been generated.</h1>
  <div class="card1">
    <p>Character #1 Card</p>
    <p class="tab1">STR DEX CON WIS INT</p>
  </div>
  <div class="card2">
    <p>Character #2 Card</p>
    <p class="tab1">STR DEX CON WIS INT</p>
  </div>
  <div class="card3">
    <p>Character #3 Card</p>
    <p class="tab1">STR DEX CON WIS INT</p>
  </div>
</template>

<style scoped lang="postcss">
.card1 {
  @apply ml-44 mt-6 inline-block h-44 w-8/12 whitespace-pre-wrap bg-yellow-700 p-6;
}
.card2 {
  @apply ml-44 mt-6 inline-block h-44 w-8/12 whitespace-pre-wrap bg-yellow-800 p-6;
}
.card3 {
  @apply ml-44 mt-6 inline-block h-44 w-8/12 whitespace-pre-wrap bg-yellow-900 p-6;
}
.tab1 {
  tab-size: 8px;
}
</style>
