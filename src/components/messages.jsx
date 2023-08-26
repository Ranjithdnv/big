
import React, { useState ,useEffect,useContext} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../App.css"
import { CountContext } from "../context";

function Messages() {
  const Contexts = useContext(CountContext)
  const [chat, setchat] = useState()
//   const upload = () => {
//     const formData = new FormData()
//     formData.append('file', file)
//     axios.post('http://localhost:3001/upload',formData )
//     .then( res => {})
//     .catch(er => console.log(er))
//   }
useEffect(() => {
  const getposts = async () => {
    try {
      const res = await axios.get("https://bigserver.onrender.com/");
      // console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getposts();
}, []);
const navi = useNavigate();
const cllick =(chat)=>{
 
  
  Contexts.user({a:"b",messenger:chat._id})
  navi("/chatwithpost");
}
   return (
    // <div>
    //   <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
    //   <button type="button" onClick={upload}>Upload</button>
    // </div>
    <>
    {chat?.map((chat,index)=>( <div key={index}> <div onClick={()=>cllick(chat)} className="imagedesc" ><img src= {`http://localhost:3001/images/${chat.img}`} height="100px" width="20px" alt="" />
    </div><div>s{chat.desc}</div></div>))}
     {/* <img src="http://localhost:3001/images/1693043656945_splash.jpg" height="100px" width="20px" alt="" />
    <div>messages</div> */}
    </> 
  )
}

export default Messages;