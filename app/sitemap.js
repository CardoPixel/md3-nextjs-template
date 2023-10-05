/**
 *
 *
 * @export
 * @return {*}
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
