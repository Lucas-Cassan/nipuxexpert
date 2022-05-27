<script>
  import axios from "axios";
  import { each } from "svelte/internal";
  import { onMount } from "svelte";

  const WEATHER = [
    { code: 0, desc: "Soleil" },
    { code: 1, desc: "Peu nuageux" },
    { code: 2, desc: "Ciel voilé" },
    { code: 3, desc: "Nuageux" },
    { code: 4, desc: "Très nuageux" },
    { code: 5, desc: "Couvert" },
    { code: 6, desc: "Brouillard" },
    { code: 7, desc: "Brouillard givrant" },
    { code: 10, desc: "Pluie faible" },
    { code: 11, desc: "Pluie modérée" },
    { code: 12, desc: "Pluie forte" },
    { code: 13, desc: "Pluie faible verglaçante" },
    { code: 14, desc: "Pluie modérée verglaçante" },
    { code: 15, desc: "Pluie forte verglaçante" },
    { code: 16, desc: "Bruine" },
    { code: 20, desc: "Neige faible" },
    { code: 21, desc: "Neige modérée" },
    { code: 22, desc: "Neige forte" },
    { code: 30, desc: "Pluie et neige mêlées faibles" },
    { code: 31, desc: "Pluie et neige mêlées modérées" },
    { code: 32, desc: "Pluie et neige mêlées fortes" },
    { code: 40, desc: "Averses de pluie locales et faibles" },
    { code: 41, desc: "Averses de pluie locales" },
    { code: 42, desc: "Averses locales et fortes" },
    { code: 43, desc: "Averses de pluie faibles" },
    { code: 44, desc: "Averses de pluie" },
    { code: 45, desc: "Averses de pluie fortes" },
    { code: 46, desc: "Averses de pluie faibles et fréquentes" },
    { code: 47, desc: "Averses de pluie fréquentes" },
    { code: 48, desc: "Averses de pluie fortes et fréquentes" },
    { code: 60, desc: "Averses de neige localisées et faibles" },
    { code: 61, desc: "Averses de neige localisées" },
    { code: 62, desc: "Averses de neige localisées et fortes" },
    { code: 63, desc: "Averses de neige faibles" },
    { code: 64, desc: "Averses de neige" },
    { code: 65, desc: "Averses de neige fortes" },
    { code: 66, desc: "Averses de neige faibles et fréquentes" },
    { code: 67, desc: "Averses de neige fréquentes" },
    { code: 68, desc: "Averses de neige fortes et fréquentes" },
    {
      code: 70,
      desc: "Averses de pluie et neige mêlées localisées et faibles",
    },
    { code: 71, desc: "Averses de pluie et neige mêlées localisées" },
    { code: 72, desc: "Averses de pluie et neige mêlées localisées et fortes" },
    { code: 73, desc: "Averses de pluie et neige mêlées faibles" },
    { code: 74, desc: "Averses de pluie et neige mêlées" },
    { code: 75, desc: "Averses de pluie et neige mêlées fortes" },
    {
      code: 76,
      desc: "Averses de pluie et neige mêlées faibles et nombreuses",
    },
    { code: 77, desc: "Averses de pluie et neige mêlées fréquentes" },
    { code: 78, desc: "Averses de pluie et neige mêlées fortes et fréquentes" },
    { code: 100, desc: "Orages faibles et locaux" },
    { code: 101, desc: "Orages locaux" },
    { code: 102, desc: "Orages fort et locaux" },
    { code: 103, desc: "Orages faibles" },
    { code: 104, desc: "Orages" },
    { code: 105, desc: "Orages forts" },
    { code: 106, desc: "Orages faibles et fréquents" },
    { code: 107, desc: "Orages fréquents" },
    { code: 108, desc: "Orages forts et fréquents" },
    { code: 120, desc: "Orages faibles et locaux de neige ou grésil" },
    { code: 121, desc: "Orages locaux de neige ou grésil" },
    { code: 122, desc: "Orages locaux de neige ou grésil" },
    { code: 123, desc: "Orages faibles de neige ou grésil" },
    { code: 124, desc: "Orages de neige ou grésil" },
    { code: 125, desc: "Orages de neige ou grésil" },
    { code: 126, desc: "Orages faibles et fréquents de neige ou grésil" },
    { code: 127, desc: "Orages fréquents de neige ou grésil" },
    { code: 128, desc: "Orages fréquents de neige ou grésil" },
    {
      code: 130,
      desc: "Orages faibles et locaux de pluie et neige mêlées ou grésil",
    },
    { code: 131, desc: "Orages locaux de pluie et neige mêlées ou grésil" },
    {
      code: 132,
      desc: "Orages fort et locaux de pluie et neige mêlées ou grésil",
    },
    { code: 133, desc: "Orages faibles de pluie et neige mêlées ou grésil" },
    { code: 134, desc: "Orages de pluie et neige mêlées ou grésil" },
    { code: 135, desc: "Orages forts de pluie et neige mêlées ou grésil" },
    {
      code: 136,
      desc: "Orages faibles et fréquents de pluie et neige mêlées ou grésil",
    },
    { code: 137, desc: "Orages fréquents de pluie et neige mêlées ou grésil" },
    {
      code: 138,
      desc: "Orages forts et fréquents de pluie et neige mêlées ou grésil",
    },
    { code: 140, desc: "Pluies orageuses" },
    { code: 141, desc: "Pluie et neige mêlées à caractère orageux" },
    { code: 142, desc: "Neige à caractère orageux" },
    { code: 210, desc: "Pluie faible intermittente" },
    { code: 211, desc: "Pluie modérée intermittente" },
    { code: 212, desc: "Pluie forte intermittente" },
    { code: 220, desc: "Neige faible intermittente" },
    { code: 221, desc: "Neige modérée intermittente" },
    { code: 222, desc: "Neige forte intermittente" },
    { code: 230, desc: "Pluie et neige mêlées" },
    { code: 231, desc: "Pluie et neige mêlées" },
    { code: 232, desc: "Pluie et neige mêlées" },
    { code: 235, desc: "Averses de grêle" },
  ];

  let weatherCode;
  onMount(async () => {
    await fetch(
      `https://api.meteo-concept.com/api/forecast/daily/3/period/2?token=d91436cde5a1f5c7f78cfb7b657f6ee7802d42d8dd1abb16b7dda7909e4a3b10&insee=34172`
    )
      .then((r) => r.json())
      .then((data) => {
        weatherCode = data.forecast.weather;
      });
  });
</script>

<div id="weather">
  {#each WEATHER as code}
    {#if code.code == weatherCode}
      À Montpellier le temps est : <span>{code.desc}</span>
    {/if}
  {/each}
</div>

<style>
  #weather {
    color: #a8acbf;
    margin-left: 40px;
    font-weight: bold;
  }
  #weather span {
    color: #557fed;
  }
</style>
