import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import firebase from "firebase";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";
import "./Feed.css";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__left">
          <Avatar src={user.photoUrl} className="feed__avatar">
            {user.email[0]}
          </Avatar>
          <div className="feed__input">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start a post"
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#6ab9f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#88c569" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e9a94b" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#fc8185"
          />
        </div>
      </div>

      <div className="feed_sort">
        <p>
          Sort by:{" "}
          <span>
            Top
            <ArrowDropDownIcon />
          </span>
        </p>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
