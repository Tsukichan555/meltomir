export default function Base({ children }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          {children}
        </body>
      </html>
    )
  }