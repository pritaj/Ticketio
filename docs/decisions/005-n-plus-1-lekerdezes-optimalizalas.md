# 005 - N+1 lekerdezes optimalizalas

## Statusz

Elfogadva - 2026-09-17

## Kontextus

1+N probléma vizsgálata volt, 200 eseménnyel tesztelve (1+200) és a hozzarendelt venue.id ami külön lekérdezi a hely részleteit. Így 1 teljes lekérdezés történik utána még 200 a hely részleteivel. "Ezt az n-plus-one-demo.ts fájlban dokumentáltam, a naiveApproach() függvényben."

## Dontes

Ezért Prisma `include` használom a kapcsolt rekordok egy lekérdezésben történő lekérésére, a külön ciklusban történő egyenkénti lekérdezés helyett.

## Indoklas

Az optimalizált lekérdezés azért jobb döntés mert csak 2 lekérdezés történik 201 helyett ami nem terheli úgy a szervert.

## Kovetkezmenyek

Az `include` használata által optimalizáltabb és gyorsabb lekérdezést eredményez mint maga a ciklusban történő lekérdezés ami 1+N lekérdezést produkál. A folytonos lekérdezés lassítja a szervert és plusz köröket fut feleslegesen.
