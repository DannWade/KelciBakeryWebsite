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
          <ol class="flex flex-1 justify-between items-center">
            <div>
              <h3 className="m-3 p-1 rounded border-2 border-amber-200 hover:bg-amber-50">DRK CHOC MODE</h3>
            </div>
            <div class="m-3">
              <h1 class="font-serif text-3xl">Kelci's Bakery</h1>
            </div>
            <div class="flex">
              <h3 class="hover:bg-amber-50 border-2 rounded border-amber-200 m-3 p-1">Portfolio</h3>
              <h3 class="hover:bg-amber-50 border-2 rounded border-amber-200 m-3 p-1"><em>Let's Bake!</em></h3>
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
