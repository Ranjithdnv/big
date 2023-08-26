import React ,{useContext ,useState} from 'react'
import "../App.css"
import { CountContext } from "../context";
function Home  ()  {
const Contexts = useContext(CountContext)
const [state ,setstate]=useState("false")
const [states ,setstates]=useState("false")
const [statess ,setstatess]=useState("false")
const [statesss ,setstatesss]=useState("false")
const [category ,setcategory]=useState("false")
const array = {category: ["a","b","c"],name:["d","e",'f'],country:["z","y","x"]}
//  console.log(Contexts.user)
//  Contexts.user("yes")
console.log(array.category)
console.log(state)
console.log(statess)
  return (
    <div className='homeContainer'>
        <div className='header'>header</div>

        <div className='main'>
<div className='main-top'>
    <div className="motive">motive</div>
    <div className="select"onClick={()=>setstate(!state)}>states</div>
    <div className="select" >
    
       {state?(<>{array.country.map((arr,index)=>(<div key={index} onClick= {()=> setstatess(!statess)}>{arr}</div>))}</>):("hh")}
        </div>
       { state&statess?(<><div onClick= {()=> setstates(!states)}>ap</div><div>mumbai</div></>):null}
        <div>{state&states&statess?(<><div  onClick= {()=> setstatesss(!statesss)}>bhimavaram</div> <div>tirupati</div></>):null}</div>
        <div>{state&states&statess&statesss?(<><div >towns</div> <div>villages</div></>):null}</div>
    <div className="categorry" onClick={()=>setcategory(!category)}>
    {category? (<>
    {array.category.map((arr)=>(<div>{arr}</div>))}
    </>):"category"}  
    </div>
    
</div>
<div className='main-container'>
<div className='four-contain'>    <div className="four">four</div>
    <div className="create">create</div></div>
 {/* <div className="messages-four">four</div> */}
 <div className="messages">messages</div>
</div>


        </div>
        
        
         <div className='footer'>foooter {Contexts.us}</div>
    </div>
  )
}
export default Home