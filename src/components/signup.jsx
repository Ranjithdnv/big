import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const navilogin = useNavigate();
  const accountcreate = async () => {
    await axios
      .post("https://bigserver.onrender.com/signup", {
        userId: text1,
        password: text2,
      }) //   https://bigserver.onrender.com/upload
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
      })
      .catch((er) => console.log(er));
    navilogin("/");
  };
  return (
    <div className="login">
      <div className="log-log">
        <div className="login-input">
          {" "}
          <input
            type="text"
            value={text1}
            onChange={(e) => {
              settext1(e.target.value);
            }}
          />
        </div>
        <div className="login-input">
          {" "}
          <input
            type="text"
            value={text2}
            onChange={(e) => {
              settext2(e.target.value);
            }}
          />
        </div>
        <div>
          <button onClick={accountcreate}>signup</button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
