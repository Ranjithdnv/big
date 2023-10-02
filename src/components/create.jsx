import React, { useState, useContext } from "react";
import axios from "axios";
import { CountContext } from "../context";
import { useNavigate } from "react-router-dom";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Create() {
  const Contexts = useContext(CountContext);
  const navilogin = useNavigate();
  const [category, setcategory] = useState("");
  const [messagetext, setmessagetext] = useState("");
  const [text, settext] = useState("");
  const [youtube, setyoutube] = useState("");
  const [otherz, setotherz] = useState("");
  const [insta, setinsta] = useState("");
  const [postdata, setpostdata] = useState([]);
  const [filename, setfilename] = useState([]);
  const [uploadchange, setuploadchange] = useState(false);
  const [imgs, setImgs] = useState();

  const handleChnage = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
    const data = new FileReader();
    data.addEventListener("load", () => {
      setImgs(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  console.log(imgs);
  const submit = () => {};
  const [file, setFile] = useState();
  const upload = async () => {
    setuploadchange(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("https://zzsocapi.onrender.com/upload", formData, { text: text })
      .then((res) => {
        console.log(res.data); //   https://bigserver.onrender.com/upload

        console.log(0);
        setfilename([...filename, res.data]);
      })
      .catch((er) => console.log(er));
    setuploadchange(false);
  };

  const filenames = [...filename];
  //   console.log(filenames.pop())
  const uploaddata = async (event) => {
    event.preventDefault();
    await axios
      .post("https://bigserver.onrender.com/postmessage", {
        userid: Contexts.us.userid,
      })
      .then(async (res) => {
        console.log(res.data.post._id);
        // Contexts.user({ ...Contexts.us, message: res.data.post._id });
        // setmessagetext(res.data.post._id);
        const data = {
          ...Contexts.us,
          desc: text,
          img: filename[filename.length * 1 - 1],
          // category: category,
          conversation: res.data.post._id,
          message: res.data.post._id,
          insta: insta,
          youtube: youtube,
          other: otherz,
          imgss: imgs,
        };
        console.log(data);
        setpostdata([...postdata, data]);
        await axios
          .post("  https://bigserver.onrender.com", data, {
            headers: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }) //https://bigserver.onrender.com/
          .then((res) => {
            console.log(res.data);
          })
          .catch((er) => console.log(er));
      })
      .catch((er) => console.log(er));
    console.log(messagetext);
    // const data = {
    //   ...Contexts.us,
    //   desc: text,
    //   img: filename[filename.length * 1 - 1],
    //   category: category,
    //   conversation: messagetext,
    // };
    // console.log(data);
    // setpostdata([...postdata, data]);
    // await axios
    //   .post("https://bigserver.onrender.com/", data)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((er) => console.log(er));
    navilogin("/");
  };
  console.log(postdata);
  //
  const checkm = async (event) => {
    event.preventDefault();
    // const data = {
    //   ...Contexts.us,
    //   desc: text,
    //   img: filename[filename.length * 1 - 1],
    //   category: category,
    // };
    // console.log(data);
    // setpostdata([...postdata, data]);
    await axios
      .post("https://bigserver.onrender.com/postmessage")
      .then((res) => {
        console.log(res.data.post._id);
      })
      .catch((er) => console.log(er));
  };
  //
  // const checkm = async (event) => {
  //   event.preventDefault();
  //   // const data = {
  //   //   ...Contexts.us,
  //   //   desc: text,
  //   //   img: filename[filename.length * 1 - 1],
  //   //   category: category,
  //   // };
  //   // console.log(data);
  //   // setpostdata([...postdata, data]);
  //   await axios
  //     .get("http://localhost:3001/postmessagesearch/64f4908a1bdcf4a5e6303639")
  //     .then((res) => {
  //       console.log(res.data.post._id);
  //     })
  //     .catch((er) => console.log(er));
  // };
  //
  const uss = Contexts.us;
  const data = { ...uss, desc: text, img: filename[filename.length * 1 - 1] };

  // console.log(data)
  return (
    <>
      {/* <div className="create-box"> */}{" "}
      <div className=" create-innerbox">
        <form className=" create-innerbox" action="">
          {/* <div>
            <img src="" alt="" />
          </div> */}
          <label htmlFor="fileupload">
            <AttachFileIcon />
          </label>
          <input
            type="text"
            value={text}
            placeholder="describe"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <div className="no-display">
            {" "}
            <input
              id="fileupload"
              type="file"
              // onChange={(e) => setFile(e.target.files[0])}
              onChange={handleChnage}
            />
          </div>
          <input
            type="text"
            value={insta}
            placeholder="insta-link"
            onChange={(e) => {
              setinsta(e.target.value);
            }}
          />
          <input
            type="text"
            value={youtube}
            placeholder="youtube-link"
            onChange={(e) => {
              setyoutube(e.target.value);
            }}
          />
          <input
            type="text"
            value={otherz}
            placeholder="other-link"
            onChange={(e) => {
              setotherz(e.target.value);
            }}
          />
          {uploadchange ? (
            <div className="link">uploading..</div>
          ) : (
            <button type="button" className="link" onClick={upload}>
              Upload
            </button>
          )}
          <button className="link" onClick={uploaddata}>
            postme
          </button>{" "}
          {/* <div>
            <input type="file" onChange={handleChnage} />
            <br />
            <img src={imgs} height="200px" width="200px" />
          </div> */}
          {/* </div> */}
        </form>
      </div>
      {/* </div> */}
    </>
  );
}
export default Create;
