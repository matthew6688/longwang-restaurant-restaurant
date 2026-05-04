export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  domain: string;
  fromName: string;
  address?: string;
  phone?: string;
  rating?: number;
  review_count?: number;
  navLinks: { label: string; href: string }[];
  footer: { text: string };
}

export const siteConfig: SiteConfig = {
  name: 'Longwang Restaurant',
  tagline: "Modern Asian seafood, wok dishes and banquets in Brisbane City",
  description: "Longwang Restaurant menu, hours, phone, address and booking details based on public restaurant data.",
  email: 'contact@longwang-restaurant.com',
  domain: 'longwang-restaurant.webjuice.fengtalk.ai',
  fromName: 'Longwang Restaurant',
  address: '144 Edward St, Brisbane City QLD 4000, Australia',
  phone: '(07) 3211 8880',
  rating: 4.8,
  review_count: 1863,
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    text: 'Longwang Restaurant - 144 Edward St',
  },
};
