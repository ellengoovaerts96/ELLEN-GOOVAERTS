# Implementatie

## Doel

Een sobere, performante en uitbreidbare portfolio website bouwen voor kunstfotografie, met focus op reeksen, grote beelden, witruimte en onderhoudbare code.

## Technische basis

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- lokale contentbestanden voor projecten en cv

## Eerste versie

- Home
- Portfolio-overzicht
- Project-detailpagina
- Over-pagina
- CV / tentoonstellingen
- Contactpagina

## Structuur

### Pagina's

- `/`
- `/portfolio`
- `/portfolio/[slug]`
- `/about`
- `/cv`
- `/contact`

### Componenten

- `Navbar`
- `Footer`
- `ProjectCard`
- `ProjectHeader`
- `ImageGrid`
- `TextBlock`
- `Lightbox` later optioneel

### Projectdata

Elk project bevat minimaal:

- `title`
- `slug`
- `year`
- `description`
- `coverImage`
- `images`

## Implementatiefases

### Fase 1 — Setup

- Next.js project opzetten
- TypeScript activeren
- Tailwind configureren
- globale layout voorzien
- basisnavigatie bouwen

### Fase 2 — Datastructuur

- `types/project.ts` maken
- `data/projects.ts` maken
- `data/cv.ts` maken
- eerste project invoeren

### Fase 3 — Pagina's

- Home bouwen
- Portfolio-overzicht bouwen
- projectdetail bouwen
- Over bouwen
- CV bouwen
- Contact bouwen

### Fase 4 — Verfijning

- componenten opschonen
- spacing verfijnen
- typografie verfijnen
- hover states en rustige transities toevoegen

### Fase 5 — Beelden en publicatie

- beelden structureren in `/public/images`
- coverbeelden koppelen
- detailbeelden ordenen
- metadata toevoegen
- performantie en fouten testen

## Visuele principes

- veel witruimte
- sobere typografie
- grote afbeeldingen
- weinig visuele ruis
- rustige navigatie
- tekst als verdieping

## Aandachtspunten

- responsive op desktop, tablet en mobiel
- geoptimaliseerde JPG of WebP
- alt-teksten voorzien
- semantische HTML gebruiken
- duidelijke heading-structuur behouden
