# 004 - Frontend adatbetoltesi minta

## Statusz

Elfogadva - 2026-09-15

## Kontextus

Létre kellett hozzak 4 db állapotot, loading, success, error, empty, elsodlegesen a loading statusz fog helyet kapni, ha nem futunk server hibába (error), akkor success statuszt kapunk, emptyt akkor ha a listank üres, A Frontent küld egy kérést a Backendből, lekérheti az összes eseményt tartalmazó listát, vagy id alapján az esemény részletesebb leírását, AbortControllert helyeztem el ez felel a gyors navigációért ha esetlegesen a felhasznaló két kérést is elindít, akkor megszakítja az előző kérést és az utólagos kérést fogja továbbítani.

## Dontes

4 állapotú status lifecycle, loading, success, empty, error.
A kozponti http.ts kliens réteg.
Az AbortController hasznalata.

## Indoklas

Azért kellett 4 állapot, hogy a felhasználó lássa mi történt az adatbetöltésekor.

Azért kellett központi http frontendben hogy ne legyenek a Vue-ban külön elszorva a fetch()-ek így megelőzve a kód duplikációt, a kérést amit küldünk a backendnek egy függvénybe rakjuk es megtudjuk jeleniteni frontenden

AbortController, ha esetlegesen a felhasznaló két kérést is elindít, akkor megszakítja az előző kérést és az utólagos kérést fogja továbbítani.

## Kovetkezmenyek

Minden jövőbeli oldal, ami adatot tölt be (Etap 2+-ban biztos lesz ilyen: foglalás, admin felület stb.), ugyanezt a mintát kell kövesse — ugyanazt a 4 állapotot, a http.ts-en keresztüli hívást. Ha valaki később "egyszerűbb útra" térne és közvetlen fetch()-et írna egy komponensbe, az megtörné ezt a konzisztenciát.

Ha új backend-hívásra van szükség, azt mindig a http.ts-be kell felvenni ÚJ függvényként, nem szabad szétszórni.

Az AbortController-es minta jelenleg egyetlen, egyszerre futó kérést tud kezelni komponensenként (egy let currentController változóval) — ha egy jövőbeli komponensnek egyszerre TÖBB, egymástól független kérést kellene indítania, ezt a mintát bővíteni kell majd.

Fontos csapda, amire figyelni kell: a catch blokkban mindig ellenőrizni kell, hogy AbortError-ról van-e szó, különben egy szándékosan megszakított kérés is hamis "hiba" üzenetet mutatna a felhasználónak.
