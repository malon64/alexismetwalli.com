import type { NavLink, SocialLink } from "./types";

export const profile = {
  name: "Alexis Metwalli",
  title: "Data Platform Engineer",
  description:
    "Data Platform Engineer in Paris. Databricks, Apache Spark, AWS, Azure, Terraform, and lakehouse architectures.",
  location: "Paris · Remote",
  contactEmail: "alexis.metwalli@gmail.com",
  intro:
    "I help data teams assess, modernize, and industrialize their data platforms—from business requirements to production infrastructure.",
  technologies: ["Databricks", "Apache Spark", "dbt", "AWS / Azure", "Terraform"],
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Selected work", href: "#references" },
  { label: "Open Source", href: "#open-source" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/malon64" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexis-metwalli/" },
  { label: "Malt", href: "https://www.malt.fr/profile/alexismetwalli" },
];
