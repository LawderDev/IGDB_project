<script setup lang="ts">
</script>

<template>
  <div>
    <div class="w-10 flex flex-col gap-y-2">
      <div class="w-8 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-6 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-8 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
    </div>

    <div class="backdrop-blur-sm absolute w-screen h-screen left-0 top-0 bg-opacity-90 bg-[#303234]">
      <ul class="mt-10 pb-10 pl-10 text-5xl flex flex-col gap-y-8 border-b-2 border-[#6B6B6B]">
        <li>Accueil</li>
        <li>Accueil</li>
        <li>Accueil</li>
        <li>Accueil</li>
      </ul>


      <ul class="pl-10 pt-8 flex text-5xl gap-x-8">
        <li>F</li>
        <li>I</li>
        <li>Ln</li>
      </ul>

      <div class="pl-10 pt-8 flex text-5xl gap-x-8">
        <button class="border-gradient text-[#FFF] text-xl decoration-none relative border-none w-32 h-10  text-center rounded-full z-10
        before:content-[''] before:absolute before:inset-[-5px] before:z-[-1] before:bg-[400px] before:rounded-full
        before:duration-1000 hover:before:blur-lg active:bg-gradient-to-r active:from-[#F18303] active:to-[#F94409]">
          Connexion
        </button>

        <button class="text-[#FFF] text-xl decoration-none relative border-none w-32 h-10 text-center
        rounded-full z-10 bg-gradient-to-r from-[#F18303] to-[#F94409]
        before:content-[''] before:absolute before:inset-[-5px] before:z-[-1] before:bg-[400px] before:rounded-full
        before:duration-1000 before:bg-gradient-to-r before:from-[#F18303] before:to-[#F94409]
        hover:before:blur-lg active:bg-gradient-to-r active:from-[#F18303] active:to-[#F94409]">
          Inscription
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.border-gradient{
}

.border-gradient::before{
  border:2px solid transparent; /*2*/
  background:linear-gradient(90deg,#F18303,#F94409) border-box; /*3*/
  -webkit-mask: /*4*/
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; /*5'*/
  mask-composite: exclude; /*5*/
}
</style>