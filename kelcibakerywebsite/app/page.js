import Image from 'next/image'
import macaron from "../public/images/1.JPG"
import kelci from "../public/images/2.JPG"
import Gallery from './gallery'

export default function Page({
  params,
  searchParams,
}) {
  return( 
  <>
  <section>
    <Image src={macaron} />
    <h1>Kelci's Bakery</h1>
  </section>
  <article>
    <p>Hello, my name is Kelci! I am a professional baker with 5 years experience. I love seeing the excitement that comes from great tasting, beutiful pastries but more than that is knowing it is an experience shared with others. </p>
    <p>I believe food brings people and is a source of happiness. I aspire to share good food and good memorieswith as many people as possible. I love to make cakes and pastries that are simple but elegant - something you want to go back or more of. Baking is a small way to make people smile.</p>
    <div>
      <Image src={kelci}></Image>
    </div>
  </article>
  <section>
    <Gallery></Gallery>
  </section>
  </>
  )
}