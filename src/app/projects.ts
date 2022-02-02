export interface Project {
  title: string;
  slug: string;
  description: string;
  descritpion_ru: string;
  date: string;
  id: number;
  tags: string;
  external_url?: string;
  image?: string;
}

export interface Projects {
  records: Project[];
}
