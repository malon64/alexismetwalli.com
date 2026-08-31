import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "OpenLakeForge",
    label: "Lakehouse platform",
    description:
      "An open-source lakehouse platform for small data teams: self-hosted, modular, and deployable locally, on AWS, or on Azure.",
    github: "https://github.com/malon64/openlakeforge",
    stack: ["Iceberg", "Trino", "dbt", "Dagster", "Terraform", "Helm"],
    command: "olf deploy --provider local",
    highlights: [
      "Reusable platform primitives for orchestration, observability, governance, and metadata management.",
      "Terraform and Helm workflows designed to standardize deployment across environments.",
      "An infrastructure-first approach built around operational clarity for small data teams.",
    ],
  },
  {
    name: "Floe",
    label: "Data contract runtime",
    description:
      "A Rust and Polars-powered data contract runtime that validates data before it enters the trusted layer.",
    github: "https://github.com/malon64/floe",
    stack: ["Rust", "Polars", "Arrow", "Data Contracts"],
    command: "floe run -c config.yml",
    highlights: [
      "Schema enforcement and data contracts before data reaches the trusted layer.",
      "A lightweight, validation-first approach to reliable file ingestion and onboarding.",
      "Designed for interoperability with modern lakehouse ecosystems.",
    ],
  },
];

export const contributions = [
  { name: "Apache Superset", href: "https://github.com/apache/superset" },
  { name: "OpenMetadata", href: "https://github.com/open-metadata/OpenMetadata" },
];
