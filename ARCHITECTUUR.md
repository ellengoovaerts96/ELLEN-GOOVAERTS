# Architectuur

## Projectdoel

Een sobere, performante en uitbreidbare portfolio website bouwen in Visual Studio Code voor een kunstfotograaf, met nadruk op:

- reeksen in plaats van losse beelden
- grote beeldpresentatie
- veel witruimte
- rustige navigatie
- eenvoudige uitbreidbaarheid
- professioneel onderhoudbare code

De technische basis is:

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- lokale contentbestanden voor projecten en cv

---

## 1. Functionele scope

### Eerste versie van de website bevat

- Home
- Portfolio-overzicht
- Project-detailpagina
- Over-pagina
- CV / tentoonstellingen
- Contactpagina

### Optioneel voor latere fase

- Lightbox
- meertaligheid
- CMS
- nieuwsbrief
- protected admin
- blog / teksten / nieuws
- tentoonstellingenkalender
- video / audio integratie

---

## 2. Technologische keuzes

### Framework

**Next.js**

Gekozen omwille van:

- duidelijke projectstructuur
- performantie
- eenvoudige routing
- goede image handling
- schaalbaarheid

### Taal

**TypeScript**

Gekozen om:

- data en componenten beter te structureren
- fouten vroeger op te vangen
- onderhoud te vergemakkelijken

### Styling

**Tailwind CSS**

Gekozen om:

- snel een sobere, verfijnde vormgeving op te bouwen
- consistente spacing te behouden
- componenten eenvoudig te hergebruiken

---

## 3. Informatie-architectuur

### Pagina's

#### Home

Doel:

- eerste indruk
- artistieke positionering
- snelle doorgang naar werk

Inhoud:

- naam
- korte introzin
- 1 sterk beeld of rustige hero-sectie
- link naar portfolio

#### Portfolio

Doel:

- overzicht van reeksen

Inhoud:

- raster of lijst van projecten
- coverbeeld
- titel
- jaartal
- korte omschrijving

#### Project-detail

Doel:

- één reeks als autonome presentatie tonen

Inhoud:

- titel
- jaar
- projecttekst
- beelden in vaste volgorde
- eventueel captions of tussenteksten

#### Over

Doel:

- artistieke praktijk situeren

Inhoud:

- korte bio
- artist statement
- eventueel portretfoto

#### CV

Doel:

- professioneel overzicht

Inhoud:

- opleidingen
- tentoonstellingen
- publicaties
- prijzen / residenties

#### Contact

Doel:

- contactmogelijkheden aanbieden

Inhoud:

- e-mail
- instagram / website-links
- eventueel eenvoudig formulier

---

## 4. Inhoudsmodel

De website denkt in **projecten / reeksen**.

Elk project bevat minimaal:

- `title`
- `slug`
- `year`
- `description`
- `coverImage`
- `images`

Optioneel:

- `captions`
- `dimensions`
- `medium`
- `location`
- `exhibitionHistory`

### Voorbeeld datastructuur

```ts
export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
};
```

### Voorbeeld projectdata

```ts
export const projects = [
  {
    title: "Verstild Verzet",
    slug: "verstild-verzet",
    year: "2025",
    description:
      "Een fotografische reeks over verstilling, keuze en onttrekking aan het stedelijke ritme.",
    coverImage: "/images/verstild-verzet/cover.jpg",
    images: [
      "/images/verstild-verzet/1.jpg",
      "/images/verstild-verzet/2.jpg",
      "/images/verstild-verzet/3.jpg"
    ]
  }
];
```

---

## 5. Mappenstructuur

```text
portfolio-site/
├── public/
│   ├── images/
│   │   ├── verstild-verzet/
│   │   ├── project-2/
│   │   └── project-3/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── cv/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ImageGrid.tsx
│   │   ├── ProjectHeader.tsx
│   │   ├── TextBlock.tsx
│   │   └── Lightbox.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   └── cv.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── project.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 6. Component-architectuur

### Globale layout-componenten

#### `Navbar`

Taken:

- navigatie tonen
- site-identiteit dragen
- op mobiel bruikbaar blijven

#### `Footer`

Taken:

- contact
- copyright
- eventueel sociale links

### Projectcomponenten

#### `ProjectCard`

Taken:

- project tonen in overzicht
- coverbeeld + titel + jaar tonen
- link naar detailpagina

#### `ProjectHeader`

Taken:

- titel
- jaar
- korte tekst

#### `ImageGrid`

Taken:

- beelden tonen
- juiste ritmiek en witruimte voorzien
- responsive layout

#### `Lightbox` *(optioneel later)*

Taken:

- beeldvergrotende weergave
- navigatie tussen beelden

#### `TextBlock`

Taken:

- artistieke tekst, projecttekst of cv-sectie tonen

---

## 7. Routing-architectuur

### Statische routes

- `/`
- `/portfolio`
- `/about`
- `/cv`
- `/contact`

### Dynamische route

- `/portfolio/[slug]`

Voorbeelden:

- `/portfolio/verstild-verzet`
- `/portfolio/tussen-muur-en-membraan`

Voordeel:

- schaalbaar
- eenvoudig om nieuwe projecten toe te voegen
- geen aparte codeduplicatie per project

---

## 8. Visuele implementatieprincipes

De site moet de logica van een **digitale tentoonstellingsruimte** volgen.

### Vormelijke principes

- veel witruimte
- sobere typografie
- geen visuele ruis
- grote afbeeldingen
- rustige margins en padding
- geen drukke animaties
- subtiele hover states
- tekst als verdieping, niet als overbelasting

### Typografische richting

Aanbevolen:

- een elegante serif of neutrale sans-serif
- duidelijke hiërarchie in koppen
- voldoende regelafstand
- beperkte kleurenset

### Kleurgebruik

Voorkeur:

- wit
- gebroken wit
- zwart
- donkergrijs
- eventueel één subtiele accentkleur

---

## 9. Responsive gedrag

De website moet goed werken op:

- desktop
- laptop
- tablet
- smartphone

### Aandachtspunten

- beelden mogen niet onnodig zwaar laden
- tekstkolommen mogen niet te breed worden
- menu moet ook mobiel helder blijven
- grids moeten netjes herschikken
- detailpagina's moeten leesbaar blijven op kleine schermen

---

## 10. Beeldbeheer

### Bestandsorganisatie

Elke reeks krijgt een eigen map in `/public/images/`.

Voorbeeld:

```text
/public/images/verstild-verzet/
  cover.jpg
  1.jpg
  2.jpg
  3.jpg
```

### Richtlijnen

- consequente bestandsnamen
- geoptimaliseerde afmetingen
- geen extreem zware originelen uploaden
- webversies voorzien
- alt-teksten toevoegen

### Aanbevolen bestandsformaat

- JPG voor fotografie
- WebP indien gewenst voor performantie
- PNG enkel indien nodig

---

## 11. SEO en toegankelijkheid

Ook een kunstwebsite heeft baat bij basisoptimalisatie.

### SEO-basis

- per pagina een duidelijke title
- meta description
- goede bestandsnamen
- semantische HTML
- duidelijke heading-structuur

### Toegankelijkheid

- alt-teksten op beelden
- voldoende contrast
- keyboard-navigatie waar mogelijk
- leesbare lettergroottes

---

## 12. Implementatiepunten per fase

### Fase 1 — Project setup

- Next.js project aanmaken
- TypeScript activeren
- Tailwind configureren
- globale layout opzetten
- basisnavigatie maken
- styling resetten en globale typografie bepalen

**Resultaat:** werkend skelet van de website

### Fase 2 — Datastructuur opzetten

- `types/project.ts` aanmaken
- `data/projects.ts` opstellen
- `data/cv.ts` opstellen
- eerste voorbeeldproject invoeren

**Resultaat:** inhoud staat gestructureerd klaar

### Fase 3 — Pagina's bouwen

- Home bouwen
- Portfolio-overzicht bouwen
- dynamische projectpagina bouwen
- Over-pagina bouwen
- CV-pagina bouwen
- Contact-pagina bouwen

**Resultaat:** alle basisroutes werken

### Fase 4 — Componenten verfijnen

- `Navbar`
- `Footer`
- `ProjectCard`
- `ProjectHeader`
- `ImageGrid`
- `TextBlock`

**Resultaat:** nette, herbruikbare codebasis

### Fase 5 — Beeldintegratie

- projectmappen vullen
- coverbeelden koppelen
- detailbeelden in volgorde zetten
- layout testen per schermgrootte

**Resultaat:** echte portfolio-inhoud zichtbaar

### Fase 6 — Visuele afwerking

- spacing verfijnen
- typografie verfijnen
- hover states toevoegen
- rustige transities toevoegen
- consistentiecontroles uitvoeren

**Resultaat:** volwassen artistieke uitstraling

### Fase 7 — Optimalisatie en publicatie

- afbeeldingen comprimeren
- metadata toevoegen
- performance check doen
- fouten testen
