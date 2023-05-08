<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <table class="table">
          <tr class="items" style="background-color: gray">
            <th style="padding-right: 50px">Character Name:</th>
            <th style="padding-right: 50px">Class:</th>
            <th style="padding-right: 50px">Race:</th>
          </tr>
          <tr class="items" style="background-color: gray">
            <th style="padding-right: 50px">Alignment:</th>
            <th style="padding-right: 50px">Background:</th>
            <th style="padding-right: 50px">Level:</th>
          </tr>
          <tr style="background-color: gray">
            <th>ABILITIES</th>
            <td>AC</td>
            <td><input id="acScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td>HP</td>
            <td><input id="hpScore" type="number" value="10" onchange="updateModifiers()" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Strength</td>
            <td><input id="strScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="strMod" type="number" placeholder="0" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Dexterity</td>
            <td><input id="dexScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="dexMod" type="number" placeholder="0" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Constitution</td>
            <td><input id="conScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="conMod" type="number" placeholder="0" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Inteligence</td>
            <td><input id="intScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="intMod" type="number" placeholder="0" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Wisdom</td>
            <td><input id="wisScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="wisMod" type="number" placeholder="0" /></td>
          </tr>
          <tr style="background-color: gray">
            <td>Charisma</td>
            <td><input id="chaScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="chaMod" type="number" placeholder="0" /></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative flex w-full items-stretch;

  .table {
    @apply bg-emerald-800;
  }
  .text {
    @apply rounded-md border-0 px-8 py-4 text-slate-900 placeholder-slate-400 outline-none focus:ring focus:ring-blue-500;
  }
  .icon {
    @apply absolute right-0 z-10 py-4 pr-8 text-blue-800;
  }
}
</style>
