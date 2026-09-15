# Ticketo

Gyakorlo projekt: esemenyjegy-ertekesito platform (backend + frontend), a Nissines fejlesztoi munkara valo felkeszules resze.

## Architektura

- `backend/` - NestJS (Node.js/TypeScript) API
- `frontend/` - Vue 3 + Vite + PrimeVue SPA

Lasd: [docs/decisions/](docs/decisions/) az architekturalis dontesekert.

## Elofeltetelek

- Node.js (v20+, teszteltuk v22-vel)
- npm

## Inditas (fejlesztoi mod)

Ket kulon terminalablak kell, mert a ket app kulon porton fut.

### 1. Backend

```
cd backend
npm install
copy .env.example .env
npm run start:dev
```

Elerheto: http://localhost:3000/api/health

### 2. Frontend

```
cd frontend
npm install
copy .env.example .env
npm run dev
```

Elerheto: http://localhost:5173

A frontend a `VITE_API_URL` kornyezeti valtozobol olvassa ki, hol talalja a backendet (lasd `frontend/.env.example`) - nincs hardkodolt cim a kodban.

## Tesztek

```
cd backend
npm test
```
