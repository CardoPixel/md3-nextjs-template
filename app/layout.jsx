/**
 *
 *
 * @export
 * @param {*} { params }
 * @return {*} 
 */
export async function generateMetadata({ params }) {
  return {
    generator: 'MD3 Next.js Template',
    applicationName: 'MD3NT',
    referrer: 'origin-when-cross-origin',
    keywords: ['Template', 'PWA', 'Internationalization', 'Bun', 'Vercel', 'Supabase', 'Material Design 3', 'Next.js', 'React', 'JavaScript'],
    title: { default: 'MD3 Next.js Template', template: '%s | MD3 Next.js Template' },
    description: 'Material Design 3 compliant Next.js website template, including features like: custom theming, Internationalization, PWA, SupaBase for data management, and Vercel for deployment.',
    authors: [{ name: 'Cardo Pixel', url: 'https://github.com/CardoPixel' }],
    creator: 'Cardo Pixel',
    publisher: 'Vercel',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#fea310' },
      { media: '(prefers-color-scheme: dark)', color: '26b0fd' },
    ],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}

/**
 *
 *
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}