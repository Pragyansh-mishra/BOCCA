import { readFileSync } from 'node:fs';
import path from 'node:path';

export function getLegacyPage(filename) {
  const source = readFileSync(path.join(process.cwd(), filename), 'utf8');
  const styles = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .join('\n');
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const html = body
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/(href|src)="assets\//g, '$1="/assets/')
    .replace(/href="css\//g, 'href="/css/')
    .replace(/href="(?:index|index\.html)"/g, 'href="/"')
    .replace(/href="about\.html"/g, 'href="/about"')
    .replace(/href="menu\.html"/g, 'href="/menu"')
    .replace(/href="reservation\.html"/g, 'href="/reservation"');

  return { html: `${styles ? `<style>${styles}</style>` : ''}${html}` };
}
