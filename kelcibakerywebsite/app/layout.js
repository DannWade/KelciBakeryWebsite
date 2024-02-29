import './globals.css'

export default function RootLayout({
  children,
  params,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <header>
          <ol>
            <div>
              <h3 className="text-3xl font-bold underline">Home</h3>
            </div>
            <div>
              <h3>Portfolio</h3>
              <h3><em>Let's Bake!</em></h3>
            </div>
          </ol>
        </header>
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
