import { Plugin } from 'vite';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { SITE_DOMAIN, EMAIL_DOMAIN } from './domain.config';

const PLACEHOLDER = 'www.example.com';
const EMAIL_PLACEHOLDER = 'example.com';

/**
 * Vite plugin that replaces the domain placeholder with the actual domain
 * in all HTML and static files during build.
 */
export function domainPlugin(): Plugin {
  let outDir = 'dist';

  return {
    name: 'domain-injection',

    configResolved(config) {
      outDir = config.build.outDir;
    },

    // Transform index.html during build
    transformIndexHtml(html) {
      if (SITE_DOMAIN === PLACEHOLDER) {
        console.warn('\n⚠️  SITE_DOMAIN is still set to placeholder. Update domain.config.ts before production!\n');
      }
      return html
        .replaceAll(PLACEHOLDER, SITE_DOMAIN)
        .replaceAll(`@${EMAIL_PLACEHOLDER}`, `@${EMAIL_DOMAIN}`);
    },

    // Process public folder files after they're copied to dist
    closeBundle() {
      if (SITE_DOMAIN === PLACEHOLDER) return;

      const processFile = (filePath: string) => {
        const ext = filePath.split('.').pop()?.toLowerCase();
        if (ext === 'xml' || ext === 'txt' || ext === 'webmanifest') {
          try {
            const content = readFileSync(filePath, 'utf-8');
            if (content.includes(PLACEHOLDER) || content.includes(`@${EMAIL_PLACEHOLDER}`)) {
              const updated = content
                .replaceAll(PLACEHOLDER, SITE_DOMAIN)
                .replaceAll(`@${EMAIL_PLACEHOLDER}`, `@${EMAIL_DOMAIN}`);
              writeFileSync(filePath, updated);
              console.log(`  ✓ Domain injected: ${filePath.replace(outDir + '/', '')}`);
            }
          } catch {
            // Skip files that can't be read
          }
        }
      };

      const walkDir = (dir: string) => {
        try {
          const files = readdirSync(dir);
          for (const file of files) {
            const filePath = join(dir, file);
            const stat = statSync(filePath);
            if (stat.isDirectory()) {
              walkDir(filePath);
            } else {
              processFile(filePath);
            }
          }
        } catch {
          // Skip directories that can't be read
        }
      };

      console.log('\n📍 Injecting domain into static files...');
      walkDir(outDir);
    }
  };
}
