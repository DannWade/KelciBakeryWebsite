export default function RootLayout({
  children,
  params,
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h3>Home</h3>
          <h3>Portfolio</h3>
          <h3>Contact</h3>
        </nav>
        <main>
          {children},
        </main> 
        <footer>
          <h1>Cakes By Kelci</h1>
          <h2>Mixing the Right Ingredients of Life</h2>
          <ul>
            <li>Insta</li>
            <li>Email</li>
            <li>Github</li>
            <li>LinkdIn</li>
          </ul> 
          <ul>
            <li>Built With:</li>
            <li>netfliy</li>
            <li>Coded with:</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </footer>  
      </body>
    </html>
  )
}
