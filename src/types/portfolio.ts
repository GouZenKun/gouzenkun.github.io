export interface Project {
  id: string;
  title: Record<string, string>;       // e.g. { en: "...", th: "...", ja: "..." }
  subtitle: Record<string, string>;    // e.g. { en: "...", th: "...", ja: "..." }
  description: Record<string, string>; // e.g. { en: "...", th: "...", ja: "..." }
  details: Record<string, string>;     // e.g. { en: "...", th: "...", ja: "..." }
  images: string[];
  tags: string[];
  role: Record<string, string>;        // e.g. { en: "...", th: "...", ja: "..." }
  date: string;
  link?: string;
  github?: string;
  flag: string; // e.g. "🇯🇵" or "🇹🇭"
}
