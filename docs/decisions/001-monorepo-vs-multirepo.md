# 001 - Monorepo vs. tobb repo

## Statusz
Elfogadva - 2026-08-26

## Kontextus
A Ticketo egy kulonallo SPA frontendbol es egy kulonallo backend API-bol all, amik HTTP(S)-en, JSON-nal kommunikalnak, es kulon is deployolhatok kell legyenek. El kellett donteni, hogy a frontend es a backend kod egy kozos git repoban (monorepo) vagy ket kulon repoban eljen.

## Dontes
Egy monorepot valasztunk, `backend/` es `frontend/` almappakkal, kozos `docs/` mappaval.

## Indoklas
- Egyszemelyes tanuloprojekt: nincs tobb csapat, akiknek kulon hozzaferes-kezelesre vagy kulon release-ciklusra lenne szuksege.
- Egy commit/PR konnyen tud egyszerre backend es frontend valtoztatast is tartalmazni (pl. uj vegpont + az azt hasznalo UI), ami etaponkent gyakori lesz.
- A dokumentacio (README, ADR-ek) egy helyen van, nem kell szinkronban tartani ket repot.
- A build/deploy kulon marad: a `backend/` es a `frontend/` mappak onalloan is buildelhetok es deployolhatok lesznek (ez architekturai kovetelmeny), csak a verziokezeles kozos.

## Kovetkezmenyek
- A `.gitignore`-nak mindket almappa build-artifactjait (pl. `node_modules`, `dist`) figyelmen kivul kell hagynia.
- Ha a projekt kesobb valodi, tobb fejlesztos csapatmunkava novi ki magat, erdemes lehet ujragondolni.
