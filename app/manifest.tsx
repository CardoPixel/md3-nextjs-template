/**
 * Generates a web application manifest for a Material Design 3 compliant Next.js website template.
 * The manifest defines the application's appearance and behavior when installed on a device.
 * It includes settings like name, start URL, theme colors, and icons for various purposes.
 *
 * @return {Object} The web application manifest object, containing properties such as name,
 * short_name, description, start_url, display settings, background and theme colors, and an array of icon definitions.
 */
export default function manifest() {
  return {
    name: 'MD3 Next.js Template',
    short_name: 'MD3NT',
    description:
      'Material Design 3 compliant Next.js website template, including features like: custom theming, Internationalization, PWA, SupaBase for data management, and Vercel for deployment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#26b0fd',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/ico',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
