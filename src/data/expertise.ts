import type { ExpertiseArea } from "./types";

export const expertise: ExpertiseArea[] = [
  {
    index: "01",
    title: "Data Engineering",
    description:
      "Turn business requirements into tested data models and production pipelines that remain understandable as they grow.",
    capabilities: [
      "Design batch and streaming ingestion pipelines",
      "Model business domains and transformation layers",
      "Migrate and refactor legacy SQL logic",
      "Diagnose Spark bottlenecks, skew, and slow models",
      "Build technical and business data-quality controls",
    ],
    methods: [
      "Apache Spark",
      "Java / Scala",
      "Python",
      "SQL",
      "dbt",
      "Data contracts",
      "DuckDB",
      "Trino",
    ],
  },
  {
    index: "02",
    title: "Data Platforms",
    description:
      "Build the shared ecosystem around pipelines so data engineers can deliver consistently instead of solving the same platform problems repeatedly.",
    capabilities: [
      "Assess architecture, codebases, and engineering practices",
      "Design lakehouse and Medallion architectures",
      "Define reusable patterns for data products and onboarding",
      "Introduce orchestration, lineage, governance, and observability",
      "Plan platform modernization and migration strategies",
    ],
    methods: [
      "Databricks",
      "Delta Lake",
      "Apache Iceberg",
      "Airflow",
      "Dagster",
      "OpenMetadata",
      "Apache Superset",
      "Apache Polaris",
      "Unity Catalog",
    ],
  },
  {
    index: "03",
    title: "Cloud & Infrastructure",
    description:
      "Provision the compute, storage, and deployment foundations required to move data workloads from prototype to reliable production.",
    capabilities: [
      "Design cloud infrastructure for data workloads",
      "Industrialize proofs of concept for production",
      "Build repeatable Infrastructure as Code modules",
      "Set up CI/CD, deployment, and environment strategies",
      "Improve operational reliability and handover",
    ],
    methods: [
      "AWS",
      "Microsoft Azure",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "GitLab CI",
      "Grafana",
    ],
  },
];

export const certifications = [
  "AWS Certified Data Engineer – Associate",
  "AWS Certified Solutions Architect – Associate",
  "Databricks Certified Data Engineer Professional",
  "Databricks Certified Data Engineer Associate",
  "Databricks Certified Associate Developer for Apache Spark",
  "HashiCorp Certified: Terraform Associate",
  "Microsoft Certified: Azure Fundamentals",
];
