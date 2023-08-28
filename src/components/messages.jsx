
import React, { useState ,useEffect,useContext} from "react"
import axios from 'axios'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "../App.css"
import { CountContext } from "../context";

function Messages({chatss}) {
  const Contexts = useContext(CountContext)
  const [chat, setchat] = useState([])
  const [Four ,setFour]=useState(["sports","start_up","pay for work","find-bussiness-partner"])
//   const upload = () => {
//     const formData = new FormData()
//     formData.append('file', file)
//     axios.post('http://localhost:3001/upload',formData )
//     .then( res => {})
//     .catch(er => console.log(er))
//   }
const getpostsfilter = async (e) => {
  e.preventDefault()
  try {
    // console.log(chatss)
    const res = await axios.post("http://localhost:3001/filter",Contexts.us);//   https://bigserver.onrender.com/
    console.log(res.data);
    setchat(res.data);
  } catch (err) {
    console.log(err);
  }
};
const fourselect=async(value)=>{

  console.log({...Contexts.us,...value})
    try {
      const res = await axios.post("http://localhost:3001/filter",{...Contexts.us,...value});//   https://bigserver.onrender.com/
      console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
    }
useEffect(() => {
  const getposts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/",{headers:{"Authorization":`Bearer ${localStorage?.getItem("token")||null}`}});//   https://bigserver.onrender.com/
      // console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getposts();
  // const getpostsfilter = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3001/filter",{desc:"king"});//   https://bigserver.onrender.com/
  //     console.log(res.data);
  //     // setchat(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getpostsfilter();
  console.log("hhhhhhhhhhhh")
}, [Contexts.us.category]);
const navi = useNavigate();
const cllick =(chat)=>{
 
  
  Contexts.user({a:"b",messenger:chat?._id})
  navi("/chatwithpost");
}
// console.log((chat[3].img).split(".")[1])
console.log(0)
   return (
    <>
    <div className="selectplaces">{Four.map((fours)=>(<button className='link' onClick={()=> fourselect({category:fours})}>{fours}</button>))}</div>
     <div className="filterandcreate"> <button className="link" onClick={ getpostsfilter}>filter</button>
    <Link className="create shadow link"  to="/create "> <div className="create link" >create</div></Link></div>
     {/* <div>
       <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>
     </div>                 //       `https://bigserver.onrender.com/images/${chat.img}` */}
    <>
    {chat?.map((chat,index)=>( <div key={index}> {(chat.img)?.split(".")[1]==="jpg"?( <div onClick={()=>cllick(chat)} className="imagedesc" ><img className="imagedesc"  src= {`http://localhost:3001/images/${chat.img}`}  alt="" />  
    </div>):( <div className="appvideo"   >
        <video className="appvideo" controls loop src= {`http://localhost:3001/images/${chat.img}`} /> </div>)}<div className='link'>{chat.desc}</div></div>))}             
     {/* <img src="http://localhost:3001/images/1693043656945_splash.jpg" height="100px" width="20px" alt="" />
    <div>messages</div> */}
    </> </>
  )
}

export default Messages;