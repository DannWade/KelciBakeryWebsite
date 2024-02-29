import Image from 'next/image'
import macaron from "../public/images/1.JPG"
import oreoCake from "../public/images/4.JPG"
import carrotCake from "../public/images/3.JPG"

let bakedGoods = [
    {title:"Banana Split Macarons",image:macaron,description:"These are macarons"},
    {title:"Oreo Cake",image:oreoCake,description:"This is an oreo cake"},
    {title:"Carrot Cake",image:carrotCake,description:"This is carrot cake"}
]

export default function Gallery(){
    return(
        bakedGoods.map((x)=><>
        <div>
            <h2>{x.title}</h2>
            <Image src={x.image}/>
            <p>{x.description}</p>
        </div>
        </>
    )
)}