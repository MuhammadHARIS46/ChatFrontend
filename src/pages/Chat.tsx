import React from "react";
import { Box } from "@material-ui/core";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatHead from "../components/ChatHead/ChatHead";
import ChatBox from "../components/ChatBox/ChatBox";
import RighSidebar from "../components/RightSidebar/RightSidebar";
import useStyles from "./stylesheet";
import {  useMediaQuery } from "@material-ui/core";
import { useAppSelector } from "../store/index";
const Chat = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { sidebar } = useAppSelector((state: any) => state.Sidebar);
  return (
    <Box
      className={classes.mainContainer}
      style={{ border: "2px solid #F5F5F5" }}
    >
      {!isSmallScreen && (
        <Box style={{ borderRight: "2px solid #F5F5F5" }}>
          <Sidebar />
        </Box>
      )}
      {sidebar && isSmallScreen ? (
        <Box
          style={{
            borderRight: "2px solid rgb(245, 245, 245)",
            position: "absolute",
            borderBottom: "2px solid rgb(245, 245, 245)",
            top: "7px",
            borderTop: "2px solid #f5f5f5",
            zIndex:1
          }}
        >
          <Sidebar />
        </Box>
      ) : (
        ""
      )}

      <Box className={classes.headerWrapper}>
        <Header />
        <Box className={classes.chatContentBox}>
          <Box style={{ borderRight: "2px solid #F5F5F5" }}>
            <Box className={classes.chatheadsContainer}>
              <ChatHead />
              <ChatHead />
              <ChatHead />
              <ChatHead />
              <ChatHead />
            </Box>
          </Box>
          <Box className={classes.chatBoxBorder}>
            <ChatBox />
          </Box>
          <Box style={{ width: "100%" }} className={classes.rightSiderBorder}>
            <RighSidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
