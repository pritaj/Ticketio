# 003 - Frontend keretrendszer: Vue 3 + PrimeVue

## Statusz
Elfogadva - 2026-08-26

## Kontextus
A frontend barmilyen SPA keretrendszer lehetett volna (React, Vue, Svelte, Angular, vanilla). A leendo kollegatol kapott linkek kozott Vue.js es PrimeVue dokumentacio szerepelt, valamint sajat, belso Nissin UI dokumentacio (docs.nissin.hu/nissin-ui).

## Dontes
Vue 3-at valasztottuk Vite build eszkozzel es PrimeVue komponenskonyvtarral.

## Indoklas
- Ez egyezik azzal, amit a celcsapat hasznal.
- A Vite gyors dev szervert es build folyamatot ad, kevesebb konfiguracios teherrel, mint pl. egy kezzel osszerakott webpack setup.
- A PrimeVue kesz UI komponenseket (tabla, urlap, dialogus stb.) ad, amikre a kesobbi etapokban (listazas, foglalas, admin feluletek) tamaszkodhatunk kod nelkul ujrafeltalalva a kereket.

## Kovetkezmenyek
- A PrimeVue sajat design-rendszeret (theme) kell hasznalni, ami eltero lehet attol, amit a Nissin UI konyvtaraban vegul latni fogunk - ezt majd ellenorizni kell, ha hozzaferunk a docs.nissin.hu/nissin-ui dokumentaciohoz.
