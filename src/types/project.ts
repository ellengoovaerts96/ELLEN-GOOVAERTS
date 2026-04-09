export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  sidebarText?: string;
  coverImage: string;
  coverAlt: string;
  images: ProjectImage[];
  medium?: string;
  dimensions?: string;
  location?: string;
  exhibitionHistory?: string[];
};
