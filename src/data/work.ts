import type { CaseStudy } from "./types";

export const selectedWork: CaseStudy[] = [
  {
    client: "Redion",
    context: "AWS ingestion platform · freelance mission",
    summary:
      "Building and operating standardized AWS ingestion workflows for business domains of 200–300 tables each, combining production support with new development.",
    details: [
      "Built ingestion workflows with Glue, DMS, S3, Step Functions, Lambda, and Redshift",
      "Migrated legacy pipelines to standardized, reusable ingestion patterns",
      "Redesigned Glue job triggers to cut selected pipeline runtimes and compute requirements",
      "Combined day-to-day production support with new platform development",
    ],
    stack: ["AWS Glue", "DMS", "Redshift", "Step Functions", "Lambda", "S3"],
    proofs: [
      { value: "4 h → 1 h", label: "Selected pipeline runtimes", featured: true },
      { value: "200–300", label: "Tables per business domain" },
      { value: "−75%", label: "Runtime through Glue trigger redesign" },
    ],
  },
  {
    client: "Sonepar",
    context: "Azure Databricks · enterprise data platform",
    summary:
      "Ownership and evolution of a legacy platform supporting a unified data layer, acting as technical lead.",
    details: [
      "Took ownership within one month of a platform built over five years",
      "Integrated 100+ domain-oriented data products",
      "Designed technical and business data-quality frameworks",
      "Contributed to the migration strategy toward Microsoft Fabric",
    ],
    stack: ["Azure Databricks", "Spark", "Python", "SQL", "Microsoft Fabric"],
    proofs: [
      { value: "50 → 10 min", label: "Critical Spark pipeline", featured: true },
      { value: "100+", label: "Domain data products integrated" },
      { value: "1 month", label: "To take ownership of a 5-year platform" },
    ],
  },
  {
    client: "Audemars Piguet",
    context: "Talend → Databricks infrastructure · Talend SQL → dbt",
    summary:
      "Migrated the infrastructure and data flows to a Databricks lakehouse while rebuilding legacy Talend jobs as maintainable dbt models running on Databricks.",
    details: [
      "Migrated platform infrastructure and data flows from Talend to Databricks",
      "Reverse-engineered undocumented Talend SQL and rebuilt the job with dbt Spark SQL on Databricks",
      "Reduced its runtime from 40 minutes to 2 minutes by refactoring a long query into structured CTEs",
      "Brought the migrated job in line with comparable models that completed in 1–2 minutes",
      "Preserved exact business outputs while introducing a Bronze / Silver / Gold Medallion architecture",
    ],
    stack: ["Databricks", "dbt", "Spark SQL", "Fivetran", "Medallion"],
    proofs: [
      { value: "40 → 2 min", label: "Legacy job runtime", featured: true },
      { value: "Talend → dbt", label: "Job and SQL logic migration" },
      { value: "Talend → Databricks", label: "Infrastructure and data migration" },
    ],
  },
  {
    client: "Safran",
    context: "AWS ETL industrialization",
    summary:
      "Transformed a pandas proof of concept processing a single CSV into an industrialized ETL running on AWS Glue and Apache Spark—all within four months.",
    details: [
      "Re-engineered a single-file pandas prototype for distributed processing with AWS Glue and Apache Spark",
      "Built production-ready ETL workflows and transformations with Python and PySpark",
      "Provisioned repeatable cloud infrastructure with Terraform",
      "Added the orchestration, quality controls, and operational foundations required for production",
    ],
    stack: ["AWS Glue", "PySpark", "Python", "Terraform"],
    proofs: [
      { value: "4 months", label: "POC-to-production delivery", featured: true },
      { value: "pandas → Spark", label: "Prototype to distributed ETL" },
      { value: "AWS Glue", label: "Industrialized production runtime" },
    ],
  },
];
