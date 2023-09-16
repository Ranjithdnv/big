import React, { useContext, useState } from "react";
import "./home.css";
import Messages from "./messages";
import Detailsof from "./detailsof";
import { CountContext } from "../context";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkModeTwoTone";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Home() {
  const Contexts = useContext(CountContext);
  const [info, setinfo] = useState(false);
  const [compo, setcompo] = useState(false);
  const [Detail, setDetail] = useState(true);
  const [World, setWorld] = useState(false);
  const [colorbg, setcolorbg] = useState("#cacbd13d");
  const [color, setcolor] = useState("red");
  const [colortrue, setcolortrue] = useState(true);
  // // const [Four ,setFour]=useState(["sports","start_up","pay for work","find-bussiness-partner"])
  // const [district ,setdistrict]=useState(false)
  // const [chatss ,setchatss]=useState([])
  // const [category ,setcategory]=useState(false)
  // const array = {category: ["sports","education","bussiness"],name:["d","e",'f'],country:["india","pak","bangladesh","srilanka"]}
  //  console.log(Contexts.us)
  // Contexts.user({a:"b"})
  // console.log(array.category)
  // console.log(World)
  // console.log(district)
  const func = () => {
    setWorld((prev) => !prev);
    // const Statez={country:"india"}
    // Contexts.user(Statez)
  };
  useEffect(() => {
    const colors = () => {
      console.log("0000000000000000000000");
      if (colortrue) {
        setcolorbg("#000000");
        setcolor("#ffffffcf");
      } else {
        setcolorbg("#f9f9f905");
        setcolor("black");
      }
      // const Statez={country:"india"}
      // Contexts.user(Statez)
    };
    colors();
  }, [colortrue]);
  const colorstrue = () => {
    setcolortrue(!colortrue);
    console.log(colortrue);
    // const Statez={country:"india"}
    // Contexts.user(Statez)
  };
  const setchats = (data) => {
    setchats(data);
    console.log(data);
  };
  const styleForButton = {
    width: "2.3rem",
    height: "2.3rem",
    // margin: 20,
    textAlign: "center",
    display: "inline-block",
  };
  useEffect(() => {
    //  let userdata=JSON.parse(localStorage.getItem("userdata"))
    //  console.log(userdata)
    //  console.log(userdata.country)
    // Contexts.user(userdata)
    //  Contexts.user(userdata)
    //  console.log(userdata)
    let obj = JSON.stringify(Contexts.us);
    localStorage.setItem("userdata", obj);
    // console.log(JSON.parse(localStorage.getItem("userdata")))
    //  console.log(Contexts.us)
    setinfo(Contexts.us);
  });
  const Details = (value) => {
    // setDetail(!Detail);
    setcompo(value);
  };

  return (
    <div className="main-box">
      <div className="header-home">
        <div className="head-motive">
          {" "}
          <div className="motive-animation"> Startrats </div>{" "}
        </div>
        <div onClick={colorstrue}>
          {colortrue ? (
            <LightModeIcon style={styleForButton} />
          ) : (
            <DarkModeIcon style={styleForButton} />
          )}
        </div>
        <div>
          <ChatTwoToneIcon style={styleForButton} />
        </div>
        <div>
          <ContactSupportTwoToneIcon style={styleForButton} />
        </div>

        <style>{"body {background-color:" + colorbg + "  }"}</style>
        <style>{"body {color:  " + color + " }"}</style>
        <div>
          {" "}
          <Link className="taggs" to="/login">
            <AccountCircleIcon style={styleForButton} />
            {/* // <div className="tagginner"></div> */}
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div className="newbiee">
            <div className="newbie" onClick={() => Details(0)}>
              {" "}
              {info.country}
            </div>
            <div className="newbie" onClick={() => Details(1)}>
              {info.state}
            </div>
            <div className="newbie" onClick={() => Details(2)}>
              {info.district}
            </div>
            <div className="newbie" onClick={() => Details(3)}>
              {info.mandal}
            </div>
            <div className="newbie" onClick={() => Details(4)}>
              {info.village}
            </div>
            <div className="newbie" onClick={() => Details(5)}>
              {info.sub_village}
            </div>
            {/* <div onClick={()=>Details(6)}>{info.category}</div>  */}
          </div>
          <div>
            {Detail && (
              <Detailsof compo={compo} setchats={setchats} num="country" />
            )}
          </div>

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
        <div>
          <div>
            {/* <div className="four">four */}
            {/* {Four.map((fours)=>(<><button onClick={()=> fourselect({country:fours})}>{fours}</button></>))} */}
            {/* </div>  */}
            {/* <Link className="create link"  to="/create "> <div className="create link" >create</div></Link> */}
          </div>
          {/* <div className="messages-four">four</div> */}
          <div>
            <Messages />
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}
export default Home;
