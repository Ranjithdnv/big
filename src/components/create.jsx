import React, {useState} from 'react'
import axios from 'axios'
function Create () {
    const[text,settext]=useState("")
    const[postdata,setpostdata]=useState([])
    const[filename,setfilename]=useState([])
    const submit=()=>{

    }
    const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload',formData ,{text:text})
    .then(( res)=>{ console.log(res.data)
    setfilename([ ...filename,res.data])})
    .catch(er => console.log(er))
  }
  const filenames=[...filename]
//   console.log(filenames.pop())
  const uploaddata = () => {
    const data = {desc:text,img:filename[filename.length*1-1]}
   setpostdata([...postdata,data])
    axios.post('http://localhost:3001/',data)
    .then(( res)=>{ console.log(res.data)
   })
    .catch(er => console.log(er))
  }
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