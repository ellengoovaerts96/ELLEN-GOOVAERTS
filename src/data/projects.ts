import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Stillness",
    slug: "verstilling",
    year: "2025",
    description:
      "A photographic series about stillness, choice, and withdrawal from the pace of the city.",
    sidebarText:
      "A man bends into the soil.\nA body folds into the geometry of a staircase.\nGrass trembles in the wind.\nDry thistles rise against a restless sky.\n\nThis series follows a quiet movement away from the speed and density of the city. Not as escape, but as a deliberate gesture: a choice for slowness, for attention, for another rhythm of living. The images move between human presence and landscape, between labour and stillness, between the body and the world that surrounds it.\n\nWithdrawal here is not absence. It is a form of resistance - a quiet refusal of urgency. In the gestures of work, in the folding of a body, in the fragile persistence of plants against the sky, another tempo becomes visible.\n\nThese photographs inhabit that space:\nthe fragile threshold between noise and silence.",
    coverImage: "/images/verstilling/familie_1.webp",
    coverAlt: "A quiet photographic image from the series Stillness.",
    exhibitionHistory: ["2025 - Group exhibition, Brussels"],
    images: [
      {
        src: "/images/verstilling/familie_1.webp",
        alt: "Image from Stillness.",
        caption: "Photographic image from the series Stillness."
      },
      {
        src: "/images/verstilling/familie_2.webp",
        alt: "Second image from Stillness.",
        caption: "Second photographic image from the series Stillness."
      },
      {
        src: "/images/verstilling/familie_3.webp",
        alt: "Third image from Stillness.",
        caption: "Third photographic image from the series Stillness."
      },
      {
        src: "/images/verstilling/familie_4.webp",
        alt: "Fourth image from Stillness.",
        caption: "Fourth photographic image from the series Stillness."
      }
    ]
  },
  {
    title: "Between Wall and Membrane",
    slug: "tussen-muur-en-membraan",
    year: "2025",
    description:
      "A series about thresholds, tactility, and the porous relationship between body and architecture.",
    sidebarText:
      "A closed door.\nA window veiled by a fragile skin of plastic.\nLight passing through a translucent curtain, dissolving the line between inside and outside.\n\nThis series explores thresholds - the subtle zones where body and architecture meet. Surfaces appear solid, yet they remain permeable: plastic bends, glass holds traces of touch, light slips through the smallest openings. Walls are no longer simple barriers but sensitive membranes that register presence and absence.\n\nMaterials wrinkle, stretch, and reflect the quiet pressure of the world around them. Architecture begins to feel almost bodily - responsive to light, proximity, and time.\n\nThese photographs dwell in that delicate space:\nwhere wall becomes membrane,\nand separation quietly begins to blur.",
    coverImage: "/images/tussen-muur-en-membraan/TMM_1.webp",
    coverAlt: "Cover image from the series Between Wall and Membrane.",
    images: [
      {
        src: "/images/tussen-muur-en-membraan/TMM_1.webp",
        alt: "First image from Between Wall and Membrane."
      },
      {
        src: "/images/tussen-muur-en-membraan/TMM_2.webp",
        alt: "Second image from Between Wall and Membrane."
      },
      {
        src: "/images/tussen-muur-en-membraan/TMM_3.webp",
        alt: "Third image from Between Wall and Membrane."
      }
    ]
  },
  {
    title: "Wild Is the Wind",
    slug: "held-by-the-wind",
    year: "2025",
    description:
      "A photographic series attentive to movement, exposure, and the fragile ways a body is held by its surroundings.",
    sidebarText:
      "Wind passes through bodies and water alike.\n\nIn these images, the human figure and the restless surface of the landscape are moved by the same invisible force - a quiet reminder that we are never separate from the world that surrounds us.",
    coverImage: "/images/Held by the wind/WIND_1.jpg",
    coverAlt: "Cover image from the series Held by the Wind.",
    images: [
      {
        src: "/images/Held by the wind/WIND_1.jpg",
        alt: "First image from Held by the Wind."
      },
      {
        src: "/images/Held by the wind/WIND_2.jpg",
        alt: "Second image from Held by the Wind."
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
