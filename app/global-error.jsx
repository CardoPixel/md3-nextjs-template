'use client'

/**
 *
 *
 * @export
 * @param {*} { error, reset }
 * @return {*} 
 */
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}