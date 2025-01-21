export interface NavItem {
  name: string;
  href: string;
  items?: {
    name: string;
    href: string;
    description: string;
  }[];
}
