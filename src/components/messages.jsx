
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
const getpostsfilter = async () => {
  try {
    const res = await axios.post("http://localhost:3001/filter",{desc:"king"});//   https://bigserver.onrender.com/
    console.log(res.data);
    setchat(res.data);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  const getposts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/");//   https://bigserver.onrender.com/
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
}, []);
const navi = useNavigate();
const cllick =(chat)=>{
 
  
  Contexts.user({a:"b",messenger:chat?._id})
  navi("/chatwithpost");
}
// console.log((chat[3].img).split(".")[1])
console.log(0)
   return (
    <>
    {/* <button onClick={ getpostsfilter}>filter</button> */}
     {/* <div>
       <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>
     </div>                 //       `https://bigserver.onrender.com/images/${chat.img}` */}
    <>
    {chat?.map((chat,index)=>( <div key={index}> {(chat.img)?.split(".")[1]==="jpg"?( <div onClick={()=>cllick(chat)} className="imagedesc" ><img className="imagedesc"  src= {`http://localhost:3001/images/${chat.img}`}  alt="" />  
    </div>):( <div className="appvideo"   >
        <video className="appvideo" controls loop src= {`http://localhost:3001/images/${chat.img}`} /> </div>)}<div>{chat.desc}</div></div>))}             
     {/* <img src="http://localhost:3001/images/1693043656945_splash.jpg" height="100px" width="20px" alt="" />
    <div>messages</div> */}
    </> </>
  )
}

export default Messages;