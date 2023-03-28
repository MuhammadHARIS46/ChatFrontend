import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "./stylesheet";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import User2 from "../../assets/User2.png";
import User from "../../assets/User.png";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AddIcon from "@material-ui/icons/Add";
import SendIcon from "@material-ui/icons/Send";
import io from "socket.io-client";
interface User {
  _id: string;
  name: string;
}

interface Message {
  _id: string;
  user: User;
  recipient: User;
  content: string;
}

function ChatBox() {
  const socket = io();
  const [messages, setMessages] = useState<Message[]>([]);
  const [sentmsg, setSentmsg] = useState("");
  const classes = useStyles();
  const userId = localStorage.getItem("userId");
  const authToken = localStorage.getItem("token");
  const [recepient, setRecepient] = useState("");
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/getuser", {
        headers: {
          auth_token: `${authToken}`,
        },
      });
      console.log("response", response.data);
      setRecepient(response.data[0]._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/messages/${recepient}`,
          {
            headers: {
              auth_token: `${authToken}`,
            },
          }
        );

        setMessages(response.data.messages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
    socket.on("message", (message) => setMessages([...messages, message]));
  }, [authToken, messages, socket]);

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/send-message",

        {
          recipientId: recepient,
          content: sentmsg,
        },
        {
          headers: {
            auth_token: `${authToken}`,
          },
        }
      );
      console.log(response.data);
      setSentmsg("");
      socket.emit("message", {
        recipientId: recepient,
        content: sentmsg,
      });
    } catch (error) {
      console.error("There was a problem with the Axios request:", error);
    }
  };
  return (
    <Box className={classes.chatMainContainer}>
      <Box className={classes.chatboxheaderMain}>
        <Box className={classes.leftSidecontainer}>
          <img src={User2} alt="..." />
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography className={classes.memberTypo}>Edwards</Typography>
            <Typography className={classes.onlineTypo}>Online</Typography>
          </Box>
        </Box>
        <Box className={classes.rightSideContainer}>
          <Typography
            className={classes.memberTypo}
            style={{ marginTop: "1rem" }}
          >
            Members
          </Typography>
          <Box className="image-container" style={{ position: "relative" }}>
            <img
              src={User2}
              style={{ position: "inherit", top: 0, left: "-9px", zIndex: 1 }}
              alt="..."
            />
            <img
              src={User}
              style={{ position: "absolute", top: 20, left: "7px", zIndex: 2 }}
              alt="..."
            />
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          marginTop: "1rem",
          borderTop: "2px solid rgb(245, 245, 245)",
          gap: "10px",
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        <Box>
          {messages.map((message) => (
            <Box
              key={message._id}
              style={{
                display: "flex",
                justifyContent:
                  message.user._id === userId ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  maxWidth: "80%",
                }}
              >
                <Typography
                  className={
                    message.user._id === userId
                      ? classes.senderChatBox
                      : classes.recevingChat
                  }
                >
                  {message.content}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.sendBtnContainer}>
        <TextField
          id="input-with-icon-textfield"
          fullWidth
          className={classes.typeMsg}
          onChange={(e) => {
            setSentmsg(e.target.value);
          }}
          value={sentmsg}
          placeholder="Send a message"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <InsertEmoticonIcon style={{ color: "blue" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <AddIcon style={{ color: "blue" }} />
              </InputAdornment>
            ),
          }}
        />
        <Button className={classes.sendBtn} onClick={sendMessage}>
          <SendIcon style={{ color: "white" }} />
        </Button>
      </Box>
    </Box>
  );
}

export default ChatBox;
