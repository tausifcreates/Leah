// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface Platform {
      env: Env;
      ctx: ExecutionContext;
      caches: CacheStorage;
      cf?: IncomingRequestCfProperties;
    }
  }

  /** Each page's last-changed date for the sitemap, set in vite.config.ts. */
  const __LASTMOD__: Record<string, string>;
}

declare module "*.md" {
  const page: import("#lib/site.ts").MarkdownPage;
  export default page;
}

export {};
