/**
 * Generates a robots.txt configuration object.
 *
 * This function returns a configuration object for robots.txt that specifies rules
 * for web crawlers to follow. It allows all user agents to access most of the site,
 * except for the "/private/" section, which is disallowed. It also specifies the
 * location of the sitemap.
 *
 * @return {Object} The robots.txt configuration object.
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://${process.env.VERCEL_URL}',
  };
}
