import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/posts", newPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-img"
            src={
              user.profilePicture
                ? user.profilePicture
                : "../../assets/people/default.jpg"
            }
            alt=""
          />
          <input
            placeholder={"Whats on your mind " + user.username + "?"}
            className="share-input"
            ref={desc}
          ></input>
        </div>
        <hr className="share-hr" />

        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMediaIcon htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <LabelIcon htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <RoomIcon htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotionsIcon htmlColor="gold" className="share-icon" />
              <span className="share-option-text">Mood</span>
            </div>
          </div>

          <button className="share-button" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
