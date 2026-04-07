import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Verstilling",
    slug: "verstilling",
    year: "2025",
    description:
      "Een fotografische reeks over verstilling, keuze en onttrekking aan het stedelijke ritme.",
    coverImage: "/images/verstilling/cover.svg",
    coverAlt: "Een stil fotografisch beeld uit de reeks Verstilling.",
    medium: "Digitale fotografie",
    dimensions: "Variabele afmetingen",
    location: "Brussel",
    exhibitionHistory: ["2025 - Groepstentoonstelling, Brussel"],
    images: [
      {
        src: "/images/verstilling/1.svg",
        alt: "Beeld één uit Verstilling.",
        caption: "Architecturale stilte en terughoudende beweging."
      },
      {
        src: "/images/verstilling/2.svg",
        alt: "Beeld twee uit Verstilling.",
        caption: "Een fotografische observatie van verstilling in stedelijke ruimte."
      },
      {
        src: "/images/verstilling/3.svg",
        alt: "Beeld drie uit Verstilling.",
        caption: "Ritme, afstand en fragmentatie."
      }
    ]
  },
  {
    title: "Tussen Muur en Membraan",
    slug: "tussen-muur-en-membraan",
    year: "2024",
    description:
      "Een reeks over grensvlakken, tactiliteit en de poreuze relatie tussen lichaam en architectuur.",
    coverImage: "/images/tussen-muur-en-membraan/cover.svg",
    coverAlt: "Coverbeeld van de reeks Tussen Muur en Membraan.",
    medium: "Digitale fotografie",
    images: [
      {
        src: "/images/tussen-muur-en-membraan/1.svg",
        alt: "Beeld één uit Tussen Muur en Membraan."
      },
      {
        src: "/images/tussen-muur-en-membraan/2.svg",
        alt: "Beeld twee uit Tussen Muur en Membraan."
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
