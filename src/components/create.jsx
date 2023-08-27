import React, {useState,useContext} from 'react'
import axios from 'axios'
import { CountContext } from "../context";

function Create () {
  const Contexts = useContext(CountContext)
    const[text,settext]=useState("")
    const[postdata,setpostdata]=useState([])
    const[filename,setfilename]=useState([])
    const submit=()=>{

    }
    const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload',formData ,{text:text})  //   https://bigserver.onrender.com/upload
    .then(( res)=>{ console.log(res.data)
    setfilename([ ...filename,res.data])})
    .catch(er => console.log(er))
  }
  const filenames=[...filename]
//   console.log(filenames.pop())
  const uploaddata = () => {

    const data = {  ...Contexts.us,desc:text,img:filename[filename.length*1-1]}
    console.log(data)
   setpostdata([...postdata,data])
    axios.post('http://localhost:3001/',data)
    .then(( res)=>{ console.log(res.data)
   })
    .catch(er => console.log(er))
  }
  const uss= Contexts.us
   const data = {  ...uss,desc:text,img:filename[filename.length*1-1]}
  
  console.log(data)
  return (<>
    <div>
        <form action="">
           <div><img src="" alt="" />
</div> 
<div> 
    <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}}/>
</div>
        </form>
        <button onClick={uploaddata}>postme</button>
    </div>
     <div>
     <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
     <button type="button" onClick={upload}>Upload</button>
   </div></>
  )
}
export default Create