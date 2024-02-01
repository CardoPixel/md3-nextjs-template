/**
 * Generates a sitemap for SEO purposes.
 *
 * This async function generates a sitemap by constructing URLs for various routes,
 * including the base URL and additional routes like "/blog" and "/projects." It also
 * includes the last modified date for each URL.
 *
 * @return {Promise<Array>} A Promise that resolves to an array of sitemap entries.
 */
export default async function sitemap() {
  const baseURL = '/';
  const otherRoutes = ['', '/blog', '/projects'];
  const routeURLs = otherRoutes.map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routeURLs];
}
