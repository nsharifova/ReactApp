// import { useState } from "react"
import ProductList from "../components/product-list/ProductList"
import Slider from "../components/slider/Slider"

const Home = () => {
  return (
<>
<Slider></Slider>
<ProductList></ProductList>
</>
  )
// const[act,setAct]=useState(false)

// return(
//   <>
//   <div className="container">
//     <div className={`box ${act?"active":""}`}></div>
//     <button onClick={()=>setAct(c=>!c)}>salam</button>
//   </div>
//   </>
// )
}

export default Home