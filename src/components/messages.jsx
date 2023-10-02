import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./message.css";
import { CountContext } from "../context";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import MediationIcon from "@mui/icons-material/Mediation";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Messages({ chatss }) {
  const Contexts = useContext(CountContext);
  const [categorydatalist, setcategorydatalist] = useState("");
  const [categoryselect, setcategoryselect] = useState("");
  const [categorydataselect, setcategorydataselect] = useState("");
  const [chat, setchat] = useState([]);
  const [Four, setFour] = useState([
    "sports",
    "start_up",
    "pay for work",
    "find-bussiness-partner",
    "not-in-youtube",
    "donate",
  ]);
  //   const upload = () => {
  //     const formData = new FormData()
  //     formData.append('file', file)
  //     axios.post('http://localhost:3001/upload',formData )
  //     .then( res => {})
  //     .catch(er => console.log(er))
  //   }
  const getpostsfilter = async (e) => {
    e.preventDefault();
    const succon = Contexts.us;
    Contexts.user({ ...succon, sub_category: categorydatalist });

    try {
      // console.log(chatss)
      const res = await axios.post("https://bigserver.onrender.com/filter", {
        ...Contexts.us,

        sub_category: categorydatalist,
      }); //   https://bigserver.onrender.com/
      console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
    let obj = JSON.stringify({ ...succon, sub_category: categorydatalist });
    localStorage.setItem("userdata", obj);
  };
  const fourselect = async (value) => {
    Contexts.user({ ...Contexts.us, ...value });
    let obj = JSON.stringify({ ...Contexts.us, ...value });
    localStorage.setItem("userdata", obj);
    setcategoryselect(value.category);

    try {
      const res = await axios.post("https://bigserver.onrender.com/filter", {
        ...Contexts.us,
        ...value,
      });
      //   https://bigserver.onrender.com/
      console.log(res.data);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //   https://bigserver.onrender.com/
    const getposts = async () => {
      try {
        const res = await axios.get("https://bigserver.onrender.com/", {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token") || null}`,
          },
        });
        console.log(res.data);
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
    console.log(chat);
  }, [Contexts.us.category]);
  const navi = useNavigate();
  // const cllick = (chat) => {
  //   Contexts.user({ a: "b", messenger: chat?._id });
  //   navi("/chatwithpost");
  // };
  const messagechat = async (value) => {
    console.log({ ...Contexts.us, ...value });
    console.log(value);
    Contexts.user({ ...Contexts.us, ...value });
    // let obj = JSON.stringify(Contexts.us);
    // localStorage.setItem("userdata", obj);
    navi("/messagechat");
  };
  // console.log((chat[3].img).split(".")[1])
  console.log(0);
  console.log(chat);
  return (
    <>
      <div className="fourtop">
        {" "}
        <div className="four">
          {Four.map((fours, index) => (
            <button key={index} onClick={() => fourselect({ category: fours })}>
              {fours}
            </button>
          ))}
        </div>{" "}
      </div>
      <div className="filter-create">
        {" "}
        <div>
          {" "}
          <button onClick={getpostsfilter}>filter</button>{" "}
        </div>
        <div>
          {" "}
          <Link to="/create " className="taggs-create">
            {" "}
            <div>create</div>
          </Link>{" "}
        </div>{" "}
      </div>
      <div>
        select in {categoryselect}
        <input
          onChange={(e) => {
            setcategorydatalist(e.target.value);
          }}
          list={categoryselect}
          type="text"
        />
        <datalist id="sports">
          <option value="sports" />
          <option value="volleyball" />
          <option value="football" />
          <option value="kabbadi" />
          <option value="tennis" />
        </datalist>
        <datalist id="start_up">
          <option value="edu-tech" />
          <option value="training" />
          <option value="bio-medical" />
          <option value="vehicels" />
          <option value="electricity-production" />
        </datalist>{" "}
        <datalist id="pay for work">
          <option value="sports-" />
          <option value="tomorrow-" />
          <option value="this sunday" />
          <option value="this week" />
          <option value="this month" />
        </datalist>{" "}
        <datalist id="not-in-youtube">
          <option value="sports-" />
          <option value="tomorrow-" />
          <option value="this sunday" />
          <option value="this week" />
          <option value="this month" />
        </datalist>{" "}
        <datalist id="donate">
          <option value="no home" />
          <option value="education" />
          <option value="health" />
          <option value="entertainment" />
          <option value="betterlife" />
        </datalist>
      </div>
      {/* <div>
       <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>
     </div>   
                   //       `https://bigserver.onrender.com/images/${chat.img}` */}
      <div className="im-age-container">
        {chat?.map((chat, index) => (
          <div
            className="im-age-containerhover"
            // onClick={() => messagechat({ messageid_: chat.conversation })}
            key={index}
          >
            {chat.imgss && (
              <div className="imagedescover">
                {" "}
                <img className="imagedesc" src={chat.imgss} alt="" />
              </div>
            )}{" "}
            {/* {chat.img?.split(".")[1] === "jpg" ||
            chat.img?.split(".")[1] === "png" ? (
              <>
                <div
                  // onClick={() => cllick(chat)}
                  className="imagedescover"
                >
                  <img
                    className="imagedesc"
                    src={
                      //"https://zzsocapi.onrender.com/images/1694067416061_swim.jpg"
                      `https://zzsocapi.onrender.com/images/${chat.img}`
                    }
                    alt=""
                  />
                </div>
                <div
                  // onClick={() => cllick(chat)}
                  className="imagedescover"
                >
                  <img className="imagedesc" src={chat.imgss} alt="" />
                </div>
              </>
            ) : (
              <div>
                <video
                  className="appvideo"
                  controls
                  loop
                  src={`https://zzsocapi.onrender.com/images/${chat.img}`}
                />{" "}
                {chat.imgss && (
                  <img className="imagedesc" src={chat.imgss} alt="" />
                )}{" "}
              </div>
            )} */}
            <div className="join">
              <Diversity1Icon />{" "}
              <div
                className="join-green"
                onClick={() => messagechat({ messageid_: chat.conversation })}
              >
                {" "}
                join
              </div>
              <div>
                {chat.insta && (
                  <>
                    <a href={chat.insta}>
                      <InstagramIcon />
                    </a>
                  </>
                )}
              </div>
              <div>
                {chat.youtube && (
                  <>
                    <a href={chat.youtube}>
                      <YouTubeIcon />
                    </a>
                  </>
                )}
              </div>{" "}
              <div>
                {chat.other && (
                  <>
                    <a href={chat.other}>
                      <MediationIcon />
                    </a>
                  </>
                )}
              </div>
            </div>
            <div className="video-text">
              <div
              //style={{ textAlign: "center" }}
              >
                <CreateRoundedIcon className="con" />
              </div>
              <div className="video-text">{chat.desc}</div>
            </div>
          </div>
        ))}
        {/* <img src="http://localhost:3001/images/1693043656945_splash.jpg" height="100px" width="20px" alt="" />
    <div>messages</div> */}
      </div>{" "}
    </>
  );
}

export default Messages;
