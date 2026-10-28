// The entries of the handbook's Notable Projects document (career/build.mjs, notableData):
// every client, then every product. titleCase and bulletText copy the handbook's
// career/lib.mjs and career/build.mjs so the titles and bullets read the same here.

// APA minor words: lowercase unless they come first or after a colon.
// Words that are not all lowercase (SOC, AI) are kept.
const MINOR = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'as', 'at', 'by', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via']);

/** Title case in APA style. */
export function titleCase(text: string): string {
  const upper = (w: string) => (w === w.toLowerCase() ? w.charAt(0).toUpperCase() + w.slice(1) : w);
  let first = true;
  return text.replace(/[A-Za-z][A-Za-z'’-]*|:/g, (token) => {
    if (token === ':') {
      first = true;
      return token;
    }
    const lead = first;
    first = false;
    return token
      .split('-')
      .map((part, i) => (MINOR.has(part.toLowerCase()) && part === part.toLowerCase() && !(lead && i === 0) && (i > 0 || !token.includes('-')) ? part : upper(part)))
      .join('-');
  });
}

type Bullet = { text: string; status?: string };

const bulletText = (b: Bullet) => (b.status === 'in-progress' ? `In progress: ${b.text}` : b.text);

type Career = {
  clients: { description: string; technologies: string[]; bullets: Bullet[] }[];
  products: { name: string; url: string; technologies: string[]; bullets: Bullet[] }[];
};

export function notableProjects(career: Career) {
  return [
    ...career.clients.map((c) => ({
      title: titleCase(c.description),
      url: undefined as string | undefined,
      technologies: c.technologies.join(', '),
      bullets: c.bullets.map(bulletText),
    })),
    ...career.products.map((x) => ({
      title: x.name,
      url: x.url,
      technologies: x.technologies.join(', '),
      bullets: x.bullets.map((b) => b.text),
    })),
  ];
}
