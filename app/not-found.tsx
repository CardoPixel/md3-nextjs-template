import Link from 'next/link';

/**
 * NotFound component that displays a message indicating that the requested resource was not found.
 * It provides a link for users to return to the homepage of the application. This component is typically
 * used to handle 404 errors in a Next.js application, where a route does not match any existing page.
 *
 * @return {JSX.Element} A React component displaying a "Not Found" message and a link to the home page.
 */
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
