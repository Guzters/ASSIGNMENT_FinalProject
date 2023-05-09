<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { ref } from 'vue'

// import useAPI from '../composables/useApi'
// const { getCharacters } = useAPI()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <table class="table">
          <tr class="items">
            <th>Character Name:</th>
            <td><input id="charName" type="text" value="N/A" onchange="updateModifiers()" /></td>
            <th>Class:</th>
            <td><input id="charClass" type="text" value="N/A" onchange="updateModifiers()" /></td>
            <th>Race:</th>
            <td><input id="charRace" type="text" value="N/A" onchange="updateModifiers()" /></td>
          </tr>
          <tr class="items">
            <th>Alignment:</th>
            <td><input id="charAlignment" type="text" value="N/A" onchange="updateModifiers()" /></td>
            <th>Background:</th>
            <td><input id="charBackground" type="text" value="N/A" onchange="updateModifiers()" /></td>
            <th>Level:</th>
            <td><input id="charLevel" type="text" value="N/A" onchange="updateModifiers()" /></td>
          </tr>
          <tr class="items">
            <td>AC</td>
            <td><input id="acScore" type="number" min="1" max="40" value="10" onchange="updateModifiers()" /></td>
            <td>HP</td>
            <td><input id="hpScore" type="number" min="1" max="40" value="10" onchange="updateModifiers()" /></td>
          </tr>

          <tr class="items">
            <th>ABILITIES</th>
          </tr>

          <tr class="items">
            <td>Strength</td>
            <td><input id="strScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="strMod" type="number" placeholder="0" /></td>
          </tr>

          <tr class="items">
            <td>Dexterity</td>
            <td><input id="dexScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="dexMod" type="number" placeholder="0" /></td>
          </tr>

          <tr class="items">
            <td>Constitution</td>
            <td><input id="conScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="conMod" type="number" placeholder="0" /></td>
          </tr>

          <tr class="items">
            <td>Inteligence</td>
            <td><input id="intScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="intMod" type="number" placeholder="0" /></td>
          </tr>

          <tr class="items">
            <td>Wisdom</td>
            <td><input id="wisScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="wisMod" type="number" placeholder="0" /></td>
          </tr>

          <tr class="items">
            <td>Charisma</td>
            <td><input id="chaScore" type="number" value="10" onchange="updateModifiers()" /></td>
            <td><input id="chaMod" type="number" placeholder="0" /></td>
          </tr>

          <div class="col-4">
            <h2>Player Level</h2>
            <input id="playerLevel" type="number" min="1" max="20" value="1" onchange="playerLevelChange()" />
            <div class="col-4">
              <h2>Proficiency Bonus</h2>
              <br />
              <input id="profBonus" type="number" value="2" />

              <h2>Skills</h2>
              <tr>
                <td><input id="acroProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Acrobatics:</td>
                <td><input id="acroScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="animProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Animal Handling:</td>
                <td><input id="animScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="arcaProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Arcana:</td>
                <td><input id="arcaScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="athlProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Athetics:</td>
                <td><input id="athlScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="decProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Deception:</td>
                <td><input id="decScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="hisProf" type="checkbox" onchange="setSkills();" /></td>
                <td>History:</td>
                <td><input id="hisScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="insProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Insight:</td>
                <td><input id="insScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="intiProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Intimidation:</td>
                <td><input id="intiScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="invProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Investigation:</td>
                <td><input id="invScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="medProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Medicine:</td>
                <td><input id="medScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="natProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Nature:</td>
                <td><input id="natScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="percProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Perception:</td>
                <td><input id="percScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="perfProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Performance:</td>
                <td><input id="perfScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="persProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Persuasion:</td>
                <td><input id="persScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="relProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Religion:</td>
                <td><input id="relScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="sleiProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Sleight of Hand:</td>
                <td><input id="sleiScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="steProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Stealth:</td>
                <td><input id="steScore" type="number" /></td>
              </tr>
              <tr>
                <td><input id="survProf" type="checkbox" onchange="setSkills();" /></td>
                <td>Survival:</td>
                <td><input id="survScore" type="number" /></td>
              </tr>
            </div>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  @apply flex w-full items-stretch;

  .table {
    @apply mx-auto bg-emerald-600 text-slate-900 outline-double outline-8;
  }
  .items {
    @apply rounded-md text-slate-900 placeholder-slate-400;
  }
}
</style>
