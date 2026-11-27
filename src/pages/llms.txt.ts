// Serves /llms.txt: a plain-Markdown summary of the site for AI agents and LLM crawlers
// (https://llmstxt.org). Generated from the same data files as the page, so it stays in sync.
import type { APIRoute } from "astro";
import { certifications, expertise } from "../data/expertise";
import { profile, socialLinks } from "../data/profile";
import { contributions, projects } from "../data/projects";
import { recommendations, recommendationsUrl } from "../data/recommendations";
import { education, timeline } from "../data/timeline";
import { selectedWork } from "../data/work";

const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

export const GET: APIRoute = ({ site }) => {
  const url = site?.toString() ?? "https://alexismetwalli.com/";

  const body = `# ${profile.name} — ${profile.title}

> ${profile.description} ${profile.intro}

- Website: ${url}
- Location: Paris, France · hybrid / remote
- Contact: ${profile.contactEmail}
${socialLinks.map(({ label, href }) => `- ${label}: ${href}`).join("\n")}

Alexis works end to end across the delivery chain: understand the client need, model the data,
implement tested transformations, and provision the infrastructure to run it reliably.

## Expertise

${expertise
  .map(
    (area) => `### ${area.title}

${area.description}

${list(area.capabilities)}

Tools: ${area.methods.join(", ")}`,
  )
  .join("\n\n")}

## Selected work

${selectedWork
  .map(
    (study) => `### ${study.client} — ${study.context}

${study.summary}

${list(study.details)}

Results: ${study.proofs.map((proof) => `${proof.value} (${proof.label})`).join("; ")}
Stack: ${study.stack.join(", ")}`,
  )
  .join("\n\n")}

## Professional experience

${timeline
  .map(
    (entry) =>
      `- ${entry.period} · ${entry.mission} · ${entry.role} (${entry.organization}): ${entry.summary}`,
  )
  .join("\n")}

## Open-source projects

${projects
  .map(
    (project) => `### [${project.name}](${project.url}) — ${project.label}

${project.description}

${list(project.highlights)}

Stack: ${project.stack.join(", ")}`,
  )
  .join("\n\n")}

Contributions: ${contributions.map(({ name, href }) => `[${name}](${href})`).join(", ")}

## Certifications

${list(certifications)}

## Education

${list(education.map((entry) => `${entry.period} · ${entry.institution} — ${entry.program} (${entry.location})`))}

## Recommendations

${recommendations
  .map((rec) => `> ${rec.quote.join(" ")}\n>\n> — ${rec.name}, ${rec.role} (${rec.date})`)
  .join("\n\n")}

More on LinkedIn: ${recommendationsUrl}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
