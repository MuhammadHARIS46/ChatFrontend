import React from "react";
import useStyles from "./stylesheet";
import { Box, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import DuoIcon from "@material-ui/icons/Duo";
import User from "../../assets/User.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
const RighSidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.rightSiderMain}>
      <Box className={classes.topMainContainer}>
        <Box className={classes.imageContainerUser}>
          <img src={User} style={{ width: "100%", height: "100%" }} alt=".." />
        </Box>
        <Typography className={classes.userNameTypo}>Ralph Edwards</Typography>
        <Box className={classes.callIconWrap}>
          <IconButton>
            <CallIcon style={{ color: "blue", fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton>
            <DuoIcon style={{ color: "blue", fontSize: "2.5rem" }} />
          </IconButton>
        </Box>
      </Box>

      <Box className={classes.topMainContainer} style={{ marginTop: "3rem" }}>
        <Box className={classes.expandBtn}>
          <Typography className={classes.expandBtnTypo}>Information</Typography>
          <ExpandMoreIcon />
        </Box>
        <Box className={classes.expandBtn}>
          <Typography className={classes.expandBtnTypo}>Files</Typography>
          <ExpandMoreIcon />
        </Box>
        <Box className={classes.expandBtn}>
          <Typography className={classes.expandBtnTypo}>Images</Typography>
          <ExpandMoreIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default RighSidebar;
