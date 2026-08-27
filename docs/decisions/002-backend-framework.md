# 002 - Backend keretrendszer: NestJS

## Statusz
Elfogadva - 2026-08-26

## Kontextus
A backend keretrendszer barmilyen Node/TS, Python, Go, C#, Java, PHP, Rust lehetett volna. Egy leendo kollegatol kapott anyagok (Teams-uzenetben kuldott dokumentacios linkek) alapjan a celcsapat NestJS-t (es Express-t, mint alapot) hasznal.

## Dontes
NestJS-t (Node.js/TypeScript) valasztottuk backend keretrendszernek.

## Indoklas
- Ez egyezik meg leginkabb azzal, amit a leendo csapat hasznal - a celkituzes pont az, hogy ezt gyakoroljuk be.
- A NestJS eleve modulokra, kontrollerekre es szolgaltatasokra (service) tagolja a kodot dekorátorokkal (`@Controller`, `@Get`, `@Injectable`), ami termeszetesen kikenyszeriti a specifikacioban elvart retegzett architekturat (route/controller -> service -> repository), mar Etap 2-tol kezdve.
- Beepitett dependency injection, validacio (`class-validator`) es strukturalt modulrendszer van benne, amikre kesobbi etapokban (pl. Etap 3 validacio, Etap 6 jogosultsagkezeles) tamaszkodni fogunk.
- Az Express csak alapreteg a NestJS alatt - a NestJS megertesehez hasznos tudni, hogy mit csinal Express szinten (HTTP request/response, middleware), de ezt a NestJS elrejti dekoratorok moge.

## Kovetkezmenyek
- Tobb kezdeti fogalmat kell megerteni (modul, kontroller, provider/service, dependency injection), mint egy csupasz Express appnal.
- Cserebe a kesobbi etapok (retegzes, validacio, jogosultsag) keretrendszer szinten mar tamogatottak lesznek, nem kezzel kell osszerakni.
