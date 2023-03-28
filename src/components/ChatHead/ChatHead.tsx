import React from "react";
import useStyles from "./stylesheet";
import { Box, Typography, Button } from "@material-ui/core";
import User from "../../assets/User.png";
const ChatHead = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainChatBox}>
      <Box className={classes.chatheadWrapper}>
        <Box>
          <img src={User} alt="" />
        </Box>
        <Box>
          <Typography className={classes.taskHeading}>Task Title 1</Typography>
          <Box className={classes.btnTypoBox}>
            <Typography className={classes.chatContentTypo}>
              Lorem ipsum dolor si t amet adipis elit. At at massa varius amet{" "}
            </Typography>
            <Button
              className={classes.priceBtn}
            >
              $1,000 - $4,000
            </Button>
          </Box>
        </Box>
        <Box className={classes.notiBox}>3</Box>
      </Box>
    </Box>
  );
};

export default ChatHead;
