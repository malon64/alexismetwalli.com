import type { EducationEntry, TimelineEntry } from "./types";

export const timeline: TimelineEntry[] = [
  {
    period: "Sep 2026 – Present",
    organization: "Freelance",
    organizationLabel: "Independent",
    role: "Data Platform Engineer",
    mission: "Redion (formerly Europ Assistance)",
    summary:
      "Built and operated AWS ingestion workflows across domains of 200–300 tables, cutting selected pipeline runtimes by 75%.",
  },
  {
    period: "Jul 2026",
    organization: "Onepoint",
    role: "Data Platform Engineer",
    mission: "Arkose",
    summary:
      "Assessed the existing data platform and defined prioritized recommendations for its evolution.",
  },
  {
    period: "Feb – Jun 2026",
    organization: "Onepoint",
    role: "Data Engineer",
    mission: "Audemars Piguet",
    summary:
      "Migrated legacy Talend workloads to dbt and Databricks while preserving their business outputs.",
  },
  {
    period: "Jan – Dec 2025",
    organization: "Onepoint",
    role: "Data Engineer / Databricks",
    mission: "Sonepar",
    summary:
      "Led a large Azure Databricks platform and improved performance, quality, and data-product integration.",
  },
  {
    period: "Oct 2024 – Jan 2025",
    organization: "Onepoint",
    role: "AWS Data Engineer & DevOps",
    mission: "Safran",
    summary:
      "Industrialized a pandas proof of concept into a production AWS Glue and Spark ETL in four months.",
  },
  {
    period: "Apr – Oct 2024",
    organization: "Devoteam A Cloud",
    role: "Big Data Engineer",
    mission: "Brut",
    summary: "Prepared a GCP-to-AWS migration and built a reusable dbt and Dagster ETL framework.",
  },
  {
    period: "Sep 2023 – Apr 2024",
    organization: "Onepoint",
    role: "Data Engineer",
    mission: "Safran",
    summary:
      "Built backend services, ingestion workflows, and Terraform infrastructure for a maintenance platform.",
  },
  {
    period: "Feb – Aug 2023",
    organization: "Onepoint",
    role: "Data Engineer Intern",
    mission: "Chanel",
    summary:
      "Built reusable Scala and Spark ingestion components for real-time lakehouse workloads.",
  },
];

export const education: EducationEntry[] = [
  {
    period: "2018 – 2023",
    institution: "INSA Lyon",
    program: "Engineering Degree / MSc in Computer Science",
    location: "Lyon, France",
  },
  {
    period: "2022",
    institution: "DGIST",
    program: "Exchange Program · AI & Deep Learning",
    location: "Daegu, South Korea",
  },
];
