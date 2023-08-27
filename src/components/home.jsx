import React ,{useContext ,useState} from 'react'
import "../App.css"
import Messages from './messages';
import Detailsof from './detailsof';
import { CountContext } from "../context";
import {Link} from "react-router-dom"
import { useEffect } from 'react';
function Home  ()  {
const Contexts = useContext(CountContext)
const [info ,setinfo]=useState(false)
const [compo ,setcompo]=useState(false)
const [Detail ,setDetail]=useState(false)
const [World ,setWorld]=useState(false)
const [State ,setState]=useState(false)
const [district ,setdistrict]=useState(false)
const [town ,settown]=useState(false)
const [category ,setcategory]=useState(false)
const array = {category: ["sports","education","bussiness"],name:["d","e",'f'],country:["india","pak","bangladesh","srilanka"]}
//  console.log(Contexts.us)
  // Contexts.user({a:"b"})
console.log(array.category)
console.log(World)
console.log(district)
const func = ()=>{
  setWorld((prev)=>!prev)
  // const Statez={country:"india"}
  // Contexts.user(Statez)
}
useEffect(()=>{

//  let userdata=JSON.parse(localStorage.getItem("userdata"))
//  console.log(userdata)
//  console.log(userdata.country)
// Contexts.user(userdata)
//  Contexts.user(userdata)
//  console.log(userdata)
let obj= JSON.stringify(Contexts.us );
localStorage.setItem("userdata", obj)
console.log(JSON.parse(localStorage.getItem("userdata")))
 console.log(Contexts.us)
setinfo(Contexts.us)
})
const Details=(value)=>{
setDetail(!Detail)
setcompo(value)

}
  return (
    <div className='homeContainer'>
        <div className='header'>header <div className="motive">motive</div></div>

        <div className='main'>
<div >
 <div className='main-top'>
   <div onClick={()=>Details(0)}> {info.country}</div><div onClick={()=>Details(1)}>{info.state}</div><div onClick={()=>Details(2)}>{info.district}</div>
   <div onClick={()=>Details(3)}>{info.mandal}</div><div onClick={()=>Details(4)}>{info.village}</div><div onClick={()=>Details(5)}>{info.sub_village}</div> 
   </div >
   <div >{Detail&& <Detailsof compo={compo} num="country"/>}</div>

   
    {/* <div className="select"onClick={func}>world</div>
    <div className="select" >
    
       {World?(<>{array.country.map((arr,index)=>(<div key={index} onClick= {()=> setdistrict(!district)}>{arr}</div>))}</>):(null)}
        </div>
       { World&district?(<><div onClick= {()=> setState(!State)}>ap</div><div>mumbai</div></>):null}
        <div>{State?(<><div  onClick= {()=> settown(!town)}>bhimavaram</div> <div>tirupati</div></>):null}</div>
        <div>{town?(<><div >towns</div> <div>villages</div></>):null}</div>
    <div className="categorry" onClick={()=>setcategory(!category)}>
    {category? (<>
    {array.category.map((arr,index)=>(<div key={index}>{arr}</div>))}
    </>):"category"}  
    </div> */}
    
</div>
<div className='main-container'>
<div className='four-contain'>    <div className="four">four</div>
   <Link to="/create"> <div className="create" >create</div></Link></div>
 {/* <div className="messages-four">four</div> */}
 <div className="messages"><Messages/></div>
</div>


        </div>
        
        
         {/* <div className='footer'>foooter {Contexts}</div> */}
    </div>
  )
}
export default Home